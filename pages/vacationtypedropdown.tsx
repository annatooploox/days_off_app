import React from 'react';

import { VacationType } from './grid';

import { includes } from '@/src/utils/includes';

const vacationTypes: VacationType[] = ['vacation', 'unpaid', 'parental'];

export default function VacationTypedropdown({
  value,
  onChange,
}: {
  value: VacationType;
  onChange: (value: VacationType) => void;
}) {
  const options = vacationTypes.map((vacationType) => (
    <option key={vacationType} value={vacationType}>
      {vacationType}
    </option>
  ));

  const chooseOption: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selectedOption = event.target.value;
    if (includes(vacationTypes, selectedOption)) {
      onChange(selectedOption);
    }
    console.log(selectedOption);
  };

  // plus margines ujemny (połowa gapa - bo z prawej i z lewej)
  // aby nie wychodziło poza contener to ustawiamy... overflow:hidden na kontenerze

  return (
    <select
      className="bg-lightgrey list-style-type: none display: inline; cursor-pointer text-sm font-medium leading-[10px] text-center transition-all duration-200 whitespace-nowrap select-none touch-manipulation relative -translate-x-2/4 block px-[30px] py-[5px] left-2/4 top-[200px];"
      placeholder="Choose day off type"
      value={value}
      onChange={chooseOption}
    >
      {options}
    </select>
  );
}
