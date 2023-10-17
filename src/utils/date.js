const MONTHS={
    '01':'Jan',
    '02':'Feb',
    '03':'Mar',
    '04':'Apr',
    '05':'May',
    '06':'Jun',
    '07':'Jul',
    '08':'Aug',
    '09':'Sep',
    '10':'Oct',
    '11':'Nov',
    '12':'Dec',
}

/**
 * get string from date of format as 2015-05-18
 * @param date
 * @returns {string}
 */
export const getDateFromString=(date)=>{
    if(!date)return '';
    const array=date.split('-');
    if(array.length<3)return '';

    return `${MONTHS[array[1]]||''} ${array[2]}, ${array[0]}`
}
