const NASTAVCISLA = "NASTAVCISLA";

// Nastavení čísel kostek - array čísel
const initialState = { cisla: [] };

export const actionCreators = {
  nastavCisla: cisla => {
    return { type: NASTAVCISLA, payload: cisla };
  }
};

export const reducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case NASTAVCISLA: {
      return { ...state, cisla: action.payload };
    }
    default:
      return state;
  }
};
