import React from 'react';
import {View} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

const PickerSelect: React.FC = () => {

        return (
            <View>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    placeholder={{
                        label: 'Selecione:',
                        value: null,
                    }}
                    items={[
                        {label: 'Futevolei', value: 'ftv'},
                        {label: 'Futebol', value: 'futbol'},
                    ]}
                />
            </View>
        ) ;
};

export default PickerSelect;