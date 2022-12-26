/// <reference types="react" />
import { ButtonProps, SelectProps } from 'antd';
import { Dispatch, SetStateAction } from 'react';

interface CronProps {
    value: string;
    setValue: SetValue;
    className?: string;
    humanizeLabels?: boolean;
    humanizeValue?: boolean;
    leadingZero?: LeadingZero;
    defaultPeriod?: PeriodType;
    disabled?: boolean;
    readOnly?: boolean;
    allowEmpty?: AllowEmpty;
    shortcuts?: Shortcuts;
    clockFormat?: ClockFormat;
    clearButton?: boolean;
    clearButtonProps?: ClearButtonProps;
    clearButtonAction?: ClearButtonAction;
    displayError?: boolean;
    onError?: OnError;
    periodicityOnDoubleClick?: boolean;
    mode: Mode;
    customMode?: {
        year?: Mode | undefined;
        month?: Mode | undefined;
        week?: Mode | undefined;
        hour?: Mode | undefined;
        minute?: Mode | undefined;
    };
    allowedDropdowns?: CronType[];
    allowedPeriods?: PeriodType[];
    locale?: Locale;
}
interface Locale {
    everyText?: string;
    emptyMonths?: string;
    emptyMonthDays?: string;
    emptyMonthDaysShort?: string;
    emptyWeekDays?: string;
    emptyWeekDaysShort?: string;
    emptyHours?: string;
    emptyMinutes?: string;
    emptyMinutesForHourPeriod?: string;
    yearOption?: string;
    monthOption?: string;
    weekOption?: string;
    dayOption?: string;
    hourOption?: string;
    minuteOption?: string;
    rebootOption?: string;
    prefixPeriod?: string;
    prefixMonths?: string;
    prefixMonthDays?: string;
    prefixWeekDays?: string;
    prefixWeekDaysForMonthAndYearPeriod?: string;
    prefixHours?: string;
    prefixMinutes?: string;
    prefixMinutesForHourPeriod?: string;
    suffixMinutesForHourPeriod?: string;
    errorInvalidCron?: string;
    clearButtonText?: string;
    weekDays?: string[];
    months?: string[];
    altWeekDays?: string[];
    altMonths?: string[];
}
type SetValueFunction = (value: string, extra: SetValueFunctionExtra) => void;
interface SetValueFunctionExtra {
    selectedPeriod: PeriodType;
}
type SetValue = SetValueFunction | Dispatch<SetStateAction<string>>;
type CronError = {
    type: 'invalid_cron';
    description: string;
} | undefined;
type OnErrorFunction = (error: CronError) => void;
type OnError = OnErrorFunction | Dispatch<SetStateAction<CronError>> | undefined;
interface ClearButtonProps extends Omit<ButtonProps, 'onClick'> {
}
type ClearButtonAction = 'empty' | 'fill-with-every';
type PeriodType = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'reboot';
type AllowEmpty = 'always' | 'never' | 'for-default-value';
type CronType = 'period' | 'months' | 'month-days' | 'week-days' | 'hours' | 'minutes';
type LeadingZeroType = 'month-days' | 'hours' | 'minutes';
type LeadingZero = boolean | LeadingZeroType[];
type ClockFormat = '24-hour-clock' | '12-hour-clock';
type ShortcutsType = '@yearly' | '@annually' | '@monthly' | '@weekly' | '@daily' | '@midnight' | '@hourly' | '@reboot';
type Shortcuts = boolean | ShortcutsType[];
type Mode = 'multiple' | 'single';
interface FieldProps {
    value?: number[];
    setValue: SetValueNumbersOrUndefined;
    locale: Locale;
    className?: string;
    disabled: boolean;
    readOnly: boolean;
    period: PeriodType;
    periodicityOnDoubleClick: boolean;
    mode: Mode;
}
interface PeriodProps extends Omit<FieldProps, 'value' | 'setValue' | 'period' | 'periodicityOnDoubleClick' | 'mode'> {
    value: PeriodType;
    setValue: SetValuePeriod;
    shortcuts: Shortcuts;
    allowedPeriods: PeriodType[];
}
interface MonthsProps extends FieldProps {
    humanizeLabels: boolean;
}
interface MonthDaysProps extends FieldProps {
    weekDays?: number[];
    leadingZero: LeadingZero;
}
interface WeekDaysProps extends FieldProps {
    humanizeLabels: boolean;
    monthDays?: number[];
}
interface HoursProps extends FieldProps {
    leadingZero: LeadingZero;
    clockFormat?: ClockFormat;
}
interface MinutesProps extends FieldProps {
    leadingZero: LeadingZero;
    clockFormat?: ClockFormat;
}
interface CustomSelectProps extends Omit<SelectProps<any>, 'mode' | 'tokenSeparators' | 'allowClear' | 'virtual' | 'onClick' | 'onBlur' | 'tagRender' | 'dropdownRender' | 'showSearch' | 'showArrow' | 'onChange' | 'dropdownMatchSelectWidth' | 'options' | 'onSelect' | 'onDeselect'> {
    grid?: boolean;
    setValue: SetValueNumbersOrUndefined;
    optionsList?: string[];
    locale: Locale;
    value?: number[];
    humanizeLabels?: boolean;
    disabled: boolean;
    readOnly: boolean;
    leadingZero?: LeadingZero;
    clockFormat?: ClockFormat;
    period: PeriodType;
    unit: Unit;
    periodicityOnDoubleClick: boolean;
    mode: Mode;
}
type SetValueNumbersOrUndefined = Dispatch<SetStateAction<number[] | undefined>>;
type SetValuePeriod = Dispatch<SetStateAction<PeriodType>>;
type SetInternalError = Dispatch<SetStateAction<boolean>>;
interface DefaultLocale {
    everyText: string;
    emptyMonths: string;
    emptyMonthDays: string;
    emptyMonthDaysShort: string;
    emptyWeekDays: string;
    emptyWeekDaysShort: string;
    emptyHours: string;
    emptyMinutes: string;
    emptyMinutesForHourPeriod: string;
    yearOption: string;
    monthOption: string;
    weekOption: string;
    dayOption: string;
    hourOption: string;
    minuteOption: string;
    rebootOption: string;
    prefixPeriod: string;
    prefixMonths: string;
    prefixMonthDays: string;
    prefixWeekDays: string;
    prefixWeekDaysForMonthAndYearPeriod: string;
    prefixHours: string;
    prefixMinutes: string;
    prefixMinutesForHourPeriod: string;
    suffixMinutesForHourPeriod: string;
    errorInvalidCron: string;
    clearButtonText: string;
    weekDays: string[];
    months: string[];
    altWeekDays: string[];
    altMonths: string[];
}
interface Classes {
    [key: string]: boolean;
}
interface ShortcutsValues {
    name: ShortcutsType;
    value: string;
}
interface Unit {
    type: CronType;
    min: number;
    max: number;
    total: number;
    alt?: string[];
}
interface Clicks {
    time: number;
    value: number;
}

declare function Cron(props: CronProps): JSX.Element;

export { AllowEmpty, Classes, ClearButtonAction, ClearButtonProps, Clicks, ClockFormat, Cron, CronError, CronProps, CronType, CustomSelectProps, DefaultLocale, FieldProps, HoursProps, LeadingZero, LeadingZeroType, Locale, MinutesProps, Mode, MonthDaysProps, MonthsProps, OnError, OnErrorFunction, PeriodProps, PeriodType, SetInternalError, SetValue, SetValueFunction, SetValueFunctionExtra, SetValueNumbersOrUndefined, SetValuePeriod, Shortcuts, ShortcutsType, ShortcutsValues, Unit, WeekDaysProps, Cron as default };