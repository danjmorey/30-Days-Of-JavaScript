const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
  
//console.log(countries)
//alert('Open the console and check if the countries has been loaded')

// EXERCISE 1
/*

for (let i = 0; i <= 10; i++){
    console.log(i);
}

let i = 10;
do {
    console.log(i);
    i--;
} while (i >= 0)

let n = 12; //magic number n
for (let i = 0; i < n; i++) {
    console.log(i);
}

let triangle = "";
for (let i = 0; i <= 6; i++) {
    triangle += "#";
    console.log(triangle);
}

let i = 1;
do {
    let stringLit = `${i} x ${i} = ${i*i}`
    i++;
    console.log(stringLit);
} while (i <= 10)

for (let i = 0; i <= 10; i++){
    if (i === 0){
        let stringLit = `i    i^2    i^3`;
        console.log(stringLit);
        i++;
    }
    let stringLit = `${i}   ${i * i}    ${i * i * i}`
    console.log(stringLit);
}

for (let i = 0; i <= 100; i++){
    if (i % 2 == 0) {
        console.log(i);
    }
}

for (let i = 0; i <= 100; i++){
    if (i % 2 != 0) {
        console.log(i);
    }
}

//fuck prime numbers
for(let i = 2; i <= 100; i++) {
    for (let n = 2; n < i; n++) {
        if (i % n === 0){
            //console.log('Not prime');
            break;
        } else {
            console.log(i);
            //break;
        }
        
    }
}

let sum = 0;
for(let i = 0; i <= 100; i++){
    sum += i;
}
console.log(sum);

let evens = 0;
let odds = 0;
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        evens += i;
    } else {
        odds += i;
    }
}
console.log(evens);
console.log(odds);

let numArr = [0,0];
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        numArr[0] += i;
    } else {
        numArr[1] += i;
    }
}
console.log(numArr);

let randArr = [];
for(let i = 0; i < 5; i++){
    randArr.push(Math.floor(Math.random() * 10));
}
console.log(randArr);
*/

let randArr = [];
for(let i = 0; i < 5; i++){
    //if() {
        randArr.push(Math.floor(Math.random() * 100));
    //}
}
console.log(randArr);

//Exercise 2

/*
let randString = "";
for (let i = 0; i > 10; i++){

}
*/
