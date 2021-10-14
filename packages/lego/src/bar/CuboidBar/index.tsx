import React, { CSSProperties, useMemo, forwardRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import {
  CustomChart,
  // 系列类型的定义后缀都为 SeriesOption
  CustomSeriesOption,
} from 'echarts/charts';
import {
  TooltipComponent,
  TooltipComponentOption,
  // 组件类型的定义后缀都为 ComponentOption
  GridComponent,
  GridComponentOption,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { SingleAxisComponentOption } from 'echarts';
import { merge } from 'lodash-es';

import createCuboidSeries from '../../utils/createCuboidSeries';
import createLinearGradient from '../../utils/createLinearGradient';
import { TooltipOption } from 'echarts/types/dist/shared';
import useTheme from '../../hooks/useTheme';
import useBaseChartConfig from '../../hooks/useBaseChartConfig';
import useChartLoop from '../../hooks/useChartLoop';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<CustomSeriesOption | TooltipComponentOption | GridComponentOption>;

// 注册必须的组件
echarts.use([TooltipComponent, GridComponent, CustomChart, CanvasRenderer]);

/**
 * 长方体柱状图，对应figma柱状图4
 */
const CuboidBar = forwardRef<
  ReactEcharts,
  {
    xAxisData: SingleAxisComponentOption['data'];
    unit?: string;
    name?: string;
    data: (number | string)[];
    style?: CSSProperties;
    /** 控制是否自动轮播 */
    autoLoop?: boolean;
    /** 自动轮播的时长，默认为2s */
    duration?: number;
    config?: ECOption;
    inModal?: boolean;
    onEvents?: Record<string, (params?: any) => void>;
  }
>(({ xAxisData, unit, name, data, autoLoop, duration = 2000, style, config, inModal = false, onEvents }, ref) => {
  const theme = useTheme();
  const baseChartConfig = useBaseChartConfig(inModal);
  const echartsRef = useChartLoop(ref, xAxisData, autoLoop, duration);

  const option = useMemo(() => {
    return merge(
      {
        color: [createLinearGradient(theme.colors.primary300)],
        legend: {
          ...baseChartConfig.legend,
        },
        grid: {
          ...baseChartConfig.grid,
        },
        tooltip: {
          ...baseChartConfig.tooltip,
          axisPointer: {
            ...(baseChartConfig.tooltip as TooltipOption).axisPointer,
            type: 'shadow',
          },
        },
        xAxis: {
          type: 'category',
          data: xAxisData,
          ...baseChartConfig.xAxis,
        },
        yAxis: {
          name: unit,
          ...baseChartConfig.yAxis,
        },
        series: [createCuboidSeries(theme, { name, data })],
      },
      config
    ) as ECOption;
  }, [
    baseChartConfig.grid,
    baseChartConfig.legend,
    baseChartConfig.tooltip,
    baseChartConfig.xAxis,
    baseChartConfig.yAxis,
    data,
    name,
    theme,
    unit,
    xAxisData,
    config,
  ]);

  return <ReactEcharts ref={echartsRef} echarts={echarts} option={option} style={style} onEvents={onEvents} />;
});

export default CuboidBar;