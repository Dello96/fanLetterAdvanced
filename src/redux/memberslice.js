import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: "member",
  initialState: {
    selectedMemberName: null,
  },
  reducers: {
    selectMember: (state, action) => {
      const selectedMemberName = action.payload.memberName;
      state.selectedMemberName = selectedMemberName;
    },
  },
});

export const { selectMember } = memberSlice.actions;

export const memberActionCreators = {
  createSelectMemberAction: selectMember,
};
export const memberReducer = memberSlice.reducer;
