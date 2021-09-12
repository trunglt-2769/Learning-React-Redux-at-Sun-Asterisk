export const payLoadCreater = (asyncFunc) => async (arg, thunkAPI) => {
  try {
    const response = await asyncFunc(arg);
    return response;
  } catch (error) {
    // Lỗi trả về không đúng định dạng SerializedError hoặc string thì bị xóa khỏi error
    // => sử dụng thunkAPI.rejectWithValue
    return thunkAPI.rejectWithValue(error);
  }
};

export const extractData = (name, dataBlock) => {
  let changedData = [];
  if (name === "category") {
    let lvl0Set = new Set();
    let lvl1Set = new Set();
    let lvl2Set = new Set();

    for (let i = 0; i < dataBlock.length; i++) {
      dataBlock[i].hierarchicalCategories.lvl0 &&
        lvl0Set.add(dataBlock[i].hierarchicalCategories.lvl0);
      dataBlock[i].hierarchicalCategories.lvl1 &&
        lvl1Set.add(dataBlock[i].hierarchicalCategories.lvl1);
      dataBlock[i].hierarchicalCategories.lvl2 &&
        lvl2Set.add(dataBlock[i].hierarchicalCategories.lvl2);
    }

    const lvl0Array = Array.from(lvl0Set).sort().slice(0, 10);
    const lvl1Array = Array.from(lvl1Set);
    const lvl2Array = Array.from(lvl2Set);

    for (let i = 0; i < lvl0Array.length; i++) {
      let childrenLvl0 = [];

      for (let j = 0; j < lvl1Array.length; j++) {
        let childrenLvl1 = [];

        for (let k = 0; k < lvl2Array.length; k++) {
          if (lvl2Array[k].includes(lvl1Array[j])) {
            let childLvl1 = lvl2Array[k].split(">")[2].trim();
            childrenLvl1.push({ name: childLvl1 });
          }
        }

        if (lvl1Array[j].includes(lvl0Array[i])) {
          let childLvl0 = lvl1Array[j].split(">")[1].trim();
          childrenLvl0.push({ name: childLvl0, children: childrenLvl1 });
        }
      }
      changedData.push({ name: lvl0Array[i], children: childrenLvl0 });
    }
  } else {
    changedData = dataBlock.reduce((obj, item) => {
      if (!obj[item[name]]) {
        obj[item[name]] = 0;
      }
      obj[item[name]]++;

      return obj;
    }, {});

    changedData = Object.entries(changedData)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([key, value]) => {
        return { name: key, qty: value };
      });
  }

  return changedData;
};
