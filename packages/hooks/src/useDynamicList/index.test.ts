import { renderHook, act } from '@testing-library/react-hooks';
import useDynamicList from './index';

describe('useDynamicList', () => {
  it('should be defined', () => {
    expect(useDynamicList).toBeDefined();
  });

  const setUp = (props: any): any => renderHook(() => useDynamicList(props));

  it('getKey should work', () => {
    const hook = setUp([1, 2, 3]);
    expect(hook.result.current[0][0]).toEqual(1);
    expect(hook.result.current[1].getKey(0)).toEqual(0);
    expect(hook.result.current[1].getKey(1)).toEqual(1);
    expect(hook.result.current[1].getKey(2)).toEqual(2);
  });

  it('methods should work', () => {
    const hook = setUp([
      { name: 'aaa', age: 18 },
      { name: 'bbb', age: 19 },
      { name: 'ccc', age: 20 },
    ]);

    expect(hook.result.current[0][0].age).toEqual(18);
    expect(hook.result.current[0][1].age).toEqual(19);
    expect(hook.result.current[0][2].age).toEqual(20);

    expect(hook.result.current[1].getKey(0)).toEqual(0);
    expect(hook.result.current[1].getKey(1)).toEqual(1);
    expect(hook.result.current[1].getKey(2)).toEqual(2);

    // unshift
    act(() => {
      hook.result.current[1].unshift({ name: 'ddd', age: 21 });
    });

    expect(hook.result.current[0][0].name).toEqual('ddd');
    expect(hook.result.current[1].getKey(0)).toEqual(3);

    // push
    act(() => {
      hook.result.current[1].push({ name: 'ddd', age: 21 });
    });

    expect(hook.result.current[0][4].name).toEqual('ddd');
    expect(hook.result.current[1].getKey(0)).toEqual(3);
    expect(hook.result.current[1].getKey(4)).toEqual(4);

    // insert
    act(() => {
      hook.result.current[1].insert(1, { name: 'eee', age: 22 });
    });
    expect(hook.result.current[0][1].name).toEqual('eee');
    expect(hook.result.current[1].getKey(1)).toEqual(5);

    // merge
    act(() => {
      hook.result.current[1].merge(0, [1, 2, 3, 4]);
    });
    expect(hook.result.current[0][0]).toEqual(1);
    expect(hook.result.current[1].getKey(0)).toEqual(6);

    // move
    act(() => {
      hook.result.current[1].move(0, 1);
    });
    expect(hook.result.current[0][0]).toEqual(2);
    expect(hook.result.current[1].getKey(0)).toEqual(7);

    // move without changes
    act(() => {
      hook.result.current[1].move(2, 2);
    });
    expect(hook.result.current[0][0]).toEqual(2);
    expect(hook.result.current[1].getKey(0)).toEqual(7);

    // shift
    act(() => {
      hook.result.current[1].shift();
    });
    expect(hook.result.current[0][0]).toEqual(1);
    expect(hook.result.current[1].getKey(0)).toEqual(6);
    expect(hook.result.current[0].length).toEqual(9);

    // pop
    act(() => {
      hook.result.current[1].pop();
    });
    expect(hook.result.current[0].length).toEqual(8);

    // replace
    act(() => {
      hook.result.current[1].replace(7, { value: 8 });
    });
    expect(hook.result.current[0][7].value).toEqual(8);

    // remove
    act(() => {
      hook.result.current[1].remove(7);
    });
    expect(hook.result.current[0].length).toEqual(7);
  });

  it('same items should have different keys', () => {
    const hook = setUp([1, 1, 1, 1]);
    expect(hook.result.current[1].getKey(0)).toEqual(0);
    expect(hook.result.current[1].getKey(1)).toEqual(1);
    expect(hook.result.current[1].getKey(2)).toEqual(2);
    expect(hook.result.current[1].getKey(3)).toEqual(3);

    act(() => {
      hook.result.current[1].push(1);
    });

    expect(hook.result.current[1].getKey(4)).toEqual(4);
    const testObj = {};

    act(() => {
      hook.result.current[1].push({});
      hook.result.current[1].push(testObj);
      hook.result.current[1].push(testObj);
    });

    expect(hook.result.current[1].getKey(5)).toEqual(5);
    expect(hook.result.current[1].getKey(6)).toEqual(6);
    expect(hook.result.current[1].getKey(7)).toEqual(7);
  });

  it('initialValue changes', () => {
    const hook = renderHook(({ initialValue }) => useDynamicList(initialValue), {
      initialProps: {
        initialValue: [1],
      },
    });
    expect(hook.result.current[0][0]).toEqual(1);
    expect(hook.result.current[1].getKey(0)).toEqual(0);

    act(() => {
      hook.result.current[1].reset([2]);
    });

    expect(hook.result.current[0][0]).toEqual(2);
    expect(hook.result.current[1].getKey(0)).toEqual(1);

    act(() => {
      hook.result.current[1].reset([3]);
    });

    expect(hook.result.current[0][0]).toEqual(3);
    expect(hook.result.current[1].getKey(0)).toEqual(2);
  });

  it('sort', () => {
    const hook = setUp([1, 2, 3, 4]);
    const formData = [
      {
        name: 'my bro',
        age: '23',
        memo: "he's my bro",
      },
      {
        name: 'my sis',
        age: '21',
        memo: "she's my sis",
      },
      null,
      {
        name: '新增行',
        age: '25',
      },
    ];

    let sorted = hook.result.current[1].sort(formData);
    expect(sorted.length).toEqual(3);
    expect(sorted[0].name).toEqual('my bro');

    act(() => {
      hook.result.current[1].move(3, 0);
    });
    sorted = hook.result.current[1].sort(formData);
    expect(sorted[0].name).toEqual('新增行');
  });
});
