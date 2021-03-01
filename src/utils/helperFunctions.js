export const fieldsFilled = ({...stateObject}) => {
  let flag = Object.values(stateObject).every((x) => x !== null && x !== '');
  return flag;
};
