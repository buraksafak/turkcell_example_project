import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    report: [
        {
            id: 0,
            unit: 'Acil ve İlkyardım Polikliniği',
            detail: 'Tomografi-CT/BT, Beyin',
            date: '27.10.2022',
        },
        {
            id: 1,
            unit: 'Göğüs Hastalıkları Polikliniği-1',
            detail: 'Tomografi-CT/BT, Venografi',
            date: '15.05.2021',
        },
        {
            id: 2,
            unit: 'Kardiyoloji Polikliniği',
            detail: 'EMG Ünitesi / EMG',
            date: '14.01.2020',
        },
        {
            id: 3,
            unit: 'Ortopedi ve Travmatoloji Polikliniği',
            detail: 'EMG Ünitesi / EMG Polinöropati',
            date: '14.01.2020',
        },
        {
            id: 4,
            unit: 'Ortopedi ve Travmatoloji Polikliniği',
            detail: 'EMG Ünitesi / EMG Polinöropati',
            date: '14.01.2020',
        },
    ],
}

export const counterSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        addReport: (state, action) => {
            state.report.push(action.payload);
        },
    },
})

// Action creators are generated for each case reducer function
export const { addReport } = counterSlice.actions

export default counterSlice.reducer