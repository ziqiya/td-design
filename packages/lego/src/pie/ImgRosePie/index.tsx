import React, { CSSProperties, forwardRef, useCallback, useMemo } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import { TooltipComponent, TooltipComponentOption, GraphicComponent, GraphicComponentOption } from 'echarts/components';
import { merge } from 'lodash-es';

import createLinearGradient from '../../utils/createLinearGradient';
import useTheme from '../../hooks/useTheme';
import useBaseChartConfig from '../../hooks/useBaseChartConfig';
import useBasePieConfig from '../../hooks/useBasePieConfig';

import imgPieGraphic from '../../assets/img_pie_graphic.png';
import imgRosePieGraphic from '../../assets/img_rose_pie_graphic.png';
import imgRosePieBg from '../../assets/img_rose_pie_bg.webp';
import useStyle from '../../hooks/useStyle';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useChartLoop from '../../hooks/useChartLoop';
import useNodeBoundingRect from '../../hooks/useNodeBoundingRect';

type ECOption = echarts.ComposeOption<PieSeriesOption | TooltipComponentOption | GraphicComponentOption>;

echarts.use([TooltipComponent, PieChart, GraphicComponent]);

export interface ImgRosePieProps {
  seriesData: { name: string; value: string | number; percent?: number | string }[];
  style?: CSSProperties;
  imgStyle?: CSSProperties;
  autoLoop?: boolean;
  config?: ECOption;
  /** 自动轮播的时长，默认为2s */
  duration?: number;
  pieColors?: [string, string][];
  onEvents?: Record<string, (params?: any) => void>;
}

/** 带图片的玫瑰图-对应Figma饼图5 */
export default forwardRef<ReactEcharts, ImgRosePieProps>(
  ({ seriesData, style, imgStyle, config, pieColors = [], duration = 2000, autoLoop = false, onEvents }, ref) => {
    const theme = useTheme();
    const baseChartConfig = useBaseChartConfig();
    const basePieConfig = useBasePieConfig();
    const { style: modifiedStyle } = useStyle(style);

    // 数据长度，轮播时使用
    const length = seriesData.length;

    // 图例选中的下标，图例不选中时不轮播
    const [activeLegends, setActiveLegends] = useState<number[]>([]);
    const echartsRef = useChartLoop(
      ref,
      seriesData.filter((_item, idx) => activeLegends.includes(idx)),
      autoLoop,
      duration
    );

    const divRef = useRef<HTMLDivElement>(null);
    const rect = useNodeBoundingRect(divRef);

    // 初始化轮播的下标
    useEffect(() => {
      const arr = new Array(length).fill(0).map((_, i) => i);
      setActiveLegends(arr);
    }, [length]);

    // 记录图例改变后的数据
    const legendSelectChanged = useCallback(({ selected }: { selected: { [name: string]: boolean } }) => {
      const selectArr: number[] = [];
      Object.keys(selected).forEach((key, index) => {
        if (selected[key]) {
          selectArr.push(index);
        }
      });
      setActiveLegends(selectArr);
    }, []);

    const baseColors = useMemo(() => {
      if (pieColors?.length > 0 && pieColors?.length >= seriesData?.length) {
        return pieColors;
      }
      return [
        theme.colors.primary50,
        theme.colors.primary100,
        theme.colors.primary200,
        theme.colors.primary300,
        theme.colors.primary400,
        theme.colors.primary500,
      ];
    }, [
      pieColors,
      seriesData?.length,
      theme.colors.primary200,
      theme.colors.primary50,
      theme.colors.primary100,
      theme.colors.primary300,
      theme.colors.primary400,
      theme.colors.primary500,
    ]);

    const colors = useMemo(() => baseColors.map(item => createLinearGradient(item)), [baseColors]);

    const option = useMemo(() => {
      return merge(
        {
          color: colors,
          legend: {
            ...baseChartConfig.legend,
          },
          graphic: {
            elements: [
              {
                type: 'image',
                left: 'center',
                style: {
                  image: imgPieGraphic,
                  width: 99,
                  height: 99,
                },
                top: 'center',
                zlevel: 2,
              },
              {
                type: 'image',
                left: 'center',
                style: {
                  image: imgRosePieGraphic,
                  width: 50,
                  height: 50,
                },
                top: 'center',
                zlevel: 3,
              },
            ],
          },
          series: {
            ...basePieConfig,
            left: 0,
            right: 0,
            radius: ['33%', '62%'],
            hoverAnimation: false,
            silent: true,
            data: seriesData,
            roseType: 'radius',
            legendHoverLink: false,
            zlevel: 3,
            emphasis: {
              scale: true,
              scaleSize: 10,
              itemStyle: {
                shadowBlur: 20,
                shadowColor: 'rgba(255, 255, 255, 0.6)',
              },
            },
            label: {
              position: 'outside',
              padding: [10, -50, 50, -40],
              formatter: '{a|{b}}\n{a|{d}%}',
              rich: {
                a: {
                  ...theme.typography.p2,
                  color: theme.colors.gray50,
                },
              },
            },
            labelLine: {
              ...basePieConfig.labelLine,
              show: true,
              length2: 40,
              minTurnAngle: 45,
            },
          },
        },
        config
      ) as ECOption;
    }, [baseChartConfig.legend, basePieConfig, seriesData, theme.colors.gray50, colors, theme.typography.p2, config]);

    return (
      <div style={modifiedStyle} ref={divRef}>
        <img
          src={imgRosePieBg}
          style={{
            position: 'absolute',
            top: ((rect?.height ?? 0) - 310) / 2,
            left: ((rect?.width ?? 0) - 401) / 2,
            ...imgStyle,
          }}
        />
        <ReactEcharts
          ref={echartsRef}
          style={{ width: modifiedStyle.width, height: modifiedStyle.height }}
          echarts={echarts}
          option={option}
          onEvents={{
            legendSelectChanged,
            ...onEvents,
          }}
        />
      </div>
    );
  }
);
