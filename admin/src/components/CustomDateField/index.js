import React, { useState } from 'react';
import { useIntl } from "react-intl";
import { extendMoment } from "moment-range";
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css' // For some basic styling. (OPTIONAL)

import {
    Flex,
    Field,
    FieldHint,
    FieldError,
    FieldLabel,
    TextInput,
} from "@strapi/design-system";

import moment from 'moment';

const DateField = ({
    attribute,
    placeholder,
    description,
    error,
    disabled,
    intlLabel,
    labelAction,
    name,
    onChange,
    required,
    value,
}) => {
    const { formatMessage } = useIntl();
    const [dates, setDates] = useState(() => {
        try {
            const values = JSON.parse(value);
            const moment2 = extendMoment(moment);
            return moment2.range(values.start, values.end)//) => value.name);
        } catch (e) {
            return [];
        }
    });
    const onSelect = (value) => {
        console.log("staart", moment(value.end).format())
        setDates(value);
        onChange({
            target: {
                name,
                value: JSON.stringify({ start: moment(value.start).format(), end: moment(value.end).format() }),
                type: attribute.type,
            },
        });
    };

    return (
        <Field
            name={name}
            id={name}
            // GenericInput calls formatMessage and returns a string for the error
            error={error}
            hint={description && formatMessage(description)}
            required={required}
        >
            <Flex direction="column" alignItems="stretch" gap={1}>
                <Flex>
                    <TextInput
                        disabled={disabled}
                        error={error}
                        hint={description ? formatMessage(description) : ''}
                        label={intlLabel ? formatMessage(intlLabel) : ''}
                        name={name}
                        onChange={(event) => { onChange({ target: { name, value: event.target.value, type: 'string' } }) }}
                        placeholder={placeholder ? formatMessage(placeholder) : ''}
                        required={required}

                        type="text"
                        value={JSON.stringify(dates) ?? ''}
                        readOnly={true}
                        />
                    
                </Flex>
                <Flex>
                    <DateRangePicker
                        onSelect={onSelect}
                        value={dates}


                    />

                    {/*<input type="text" value={dates} onChange={handleDateChange} />*/}
                </Flex>
                <FieldHint />
                <FieldError />
            </Flex>
        </Field>
    )

}
export default DateField;