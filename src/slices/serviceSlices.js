import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  service: [
    {
      id: 0,
      title: 'D-Dimer',
      sutCode: 'L10292',
      sutPrice: 55.12,
    },
    {
      id: 1,
      title: 'CRP (Acil)',
      sutCode: 'L1102',
      sutPrice: 24.94,
    },
    {
      id: 2,
      title: 'Kan Gazları(Buz+Heparin)',
      sutCode: 'L10394',
      sutPrice: 20.97,
    },
    {
      id: 3,
      title: 'Tam Kan Sayımı (Hemogram)',
      sutCode: 'L10023',
      sutPrice: 50.21,
    },
    {
      id: 4,
      title: 'Sedimantasyon',
      sutCode: 'L101320',
      sutPrice: 23.25,
    },
    {
      id: 5,
      title: 'P. Kolinesteraz',
      sutCode: 'L106234',
      sutPrice: 12.72,
    },
    {
      id: 6,
      title: 'P. Kolinesteraz',
      sutCode: 'L106234',
      sutPrice: 12.72,
    },
    {
      id: 7,
      title: 'CRP',
      sutCode: 'L106234',
      sutPrice: 12.72,
    },
  ],
}

export const counterSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    addService: (state, action) => {
      state.service.push(action.payload);
    },
    deleteService: (state) => {
    },
  },
})

// Action creators are generated for each case reducer function
export const { addService, deleteService } = counterSlice.actions

export default counterSlice.reducer