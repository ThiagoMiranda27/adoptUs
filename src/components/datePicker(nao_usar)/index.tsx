import React, { useState } from 'react'
import DatePicker from 'react-native-datepicker'

const Input: React.FC = () => {
    const [date, setDate] = useState(null);

    const changeDate = (valor) => {
        setDate(valor);
    }

        return (
            <DatePicker
                style={{width: 300}}
                date={date}
                mode="date"
                placeholder="Selecione a data"
                format="DD-MM-YYYY"
                minDate="01-01-1930"
                maxDate="31-12-2021"
                confirmBtnText="Confirmar"
                cancelBtnText="Cancelar"
                customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36
                }
                }}
                onDateChange={changeDate(date)}
      />
        )  
};

export default Input;