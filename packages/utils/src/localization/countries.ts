import {keyBy, mapValues} from 'lodash-es'
import {Country} from '../types'

// @ts-ignore
import countryData from 'countries-db'

const countryIdMap: Record<string, string> = {
    AF: "b0c6f3be-311c-430d-979a-e2fa19dfdb6e",
    AX: "8574627c-641e-4cc0-b2f7-ceccede87cdd",
    AL: "a69967d5-fa48-4865-a771-45fb0a3d3392",
    DZ: "59b772b6-e10e-4a4d-8c14-f7ee0851889f",
    AS: "52396a5e-ec47-4675-a424-c72f0b1a454d",
    AD: "3507cdb8-c81c-416c-96e1-efe95b5c3e05",
    AO: "269de0aa-195b-4642-9e19-d4a1f2b2056a",
    AI: "211613c4-6d4d-4e34-9996-ca70cc5dcfac",
    AQ: "6174bc88-57c0-4057-b404-9f1a2421b3f8",
    AG: "13c18d8e-45f9-4e1f-8e20-acf19272f8e7",
    AR: "e3c893b8-675c-4d81-9475-d7030ec54832",
    AM: "88724346-42d3-46e5-bcfd-74d02e6d4a57",
    AW: "19126ffe-1c27-4b4a-ba0a-6377c90d6d86",
    AU: "f373eea4-637d-4ccf-8f7e-ec81641a581c",
    AT: "31d90dfc-a996-46e7-8234-e56d203a37cd",
    AZ: "480ffb54-e97e-4d35-9e40-e9447b5e047b",
    BH: "94bdac7d-c368-49e3-bc7e-d6dc63ccc242",
    BD: "d1f40baf-7b9f-42fd-8357-ff5965d35368",
    BB: "5e1c0fa9-6d9b-456f-956c-b4360735e6ce",
    BY: "570ad025-9f8a-46ac-a306-a29846ba65f2",
    BE: "c4e15c8d-5084-48ec-af33-3a56ae1c2610",
    BZ: "30fc4db1-f204-4d53-9fad-167b28fc4107",
    BJ: "c4060970-2fec-4b92-aa50-6cb3ca775921",
    BM: "4299d476-4bc1-4a10-966a-06e523506812",
    BT: "c6c33d09-6259-4e7e-b567-c56513a1ad01",
    BO: "98070316-f469-4e38-adec-7ad244385acd",
    BQ: "632604f2-5a9c-493a-bece-df258ce1a9ae",
    BA: "2e1cde3b-aa2b-4f30-84ba-44111ec1e06f",
    BW: "079a50f1-88ed-4207-bb06-34dab1a2df1e",
    BV: "cc6088d1-fe8a-444c-9b03-b55928573b5d",
    BR: "6531789e-e99a-40d9-a444-837ee3bf9f42",
    IO: "756f5296-907b-4d92-ab36-d1375eee7975",
    BN: "bc9decd1-592c-4607-82a2-ae601aa0d70f",
    BG: "32fd621e-2269-4b8d-9097-a6f11a907241",
    BF: "fe79cca5-c24a-42d4-8689-62505c6ee9f9",
    BI: "0309e73d-60a8-4083-9bec-37bab7af3399",
    KH: "6b6a5034-8575-4e6a-bbe9-97b5d0447868",
    CM: "4246cfe1-05d7-4958-9d0c-f0b5ee260331",
    CA: "eed7141b-cf49-4472-a078-972e55a0818f",
    CV: "ebb85b22-5bcc-4b8b-b04e-b3ae0e555cdc",
    KY: "a1a78762-175e-4299-958c-15c55619126b",
    CF: "25b64838-d127-4e50-893c-9596d0611afe",
    TD: "a7c18e44-730f-4241-b9cb-5c0246bcea9a",
    CL: "6ef21018-3f0f-454c-b69b-3b87eb365e88",
    CN: "71748c95-5ff8-410f-af0f-119f4eb5a3d5",
    CX: "1e0b99e5-612c-4627-a8bd-c1a316ee6e34",
    CC: "0e5a873f-7dca-4cce-b356-5f33da860781",
    CO: "48e3bfda-33fc-46b9-b423-a8faad76c589",
    KM: "faf71835-8f4a-4079-94cb-7242eceec8b4",
    CG: "5b5f0dc7-d084-4438-b75c-d5ad587292b8",
    CK: "9084907e-6d47-43c1-a4c3-2de0f57509a6",
    CR: "b7dac9b3-c2c4-4233-b48c-5d70ca90daf2",
    CI: "0c4945d6-d02c-4b41-b5f8-3e6ea4dc8639",
    HR: "bb9803ac-7d20-47f0-94e1-b40203524836",
    CU: "ff84919a-3387-4a48-a0b6-37668f9fe59c",
    CW: "fdb3aea9-fd39-4f93-8a31-426869257ae8",
    CY: "4cf4551c-a54c-4ee6-b1fe-a6c25be40926",
    CZ: "e7311cb0-0e9f-400d-8e41-e2dab6a3d901",
    CD: "ab016491-5b15-4a4e-a98b-624420c45296",
    DK: "4d6c22c8-7958-4123-b225-4e903b7d2ccc",
    DJ: "19fabe27-5b0c-467e-9207-9e886364dcce",
    DM: "6646d06e-13ce-4424-aa5b-6043cd879ddc",
    DO: "d3a4fe68-4846-4a72-bcae-431e50ec3213",
    TL: "c6f6601d-12fa-4406-9dfc-1cc0a534c6b3",
    EC: "e2a73a25-92f7-4782-9375-ec4254a92791",
    EG: "8689a338-2201-4e29-a180-0d8ced62934e",
    SV: "3d831d5f-28f5-43cb-a8b8-4227c3cae0cd",
    GQ: "6ce19330-5ebb-4212-9258-91d60f9e0bfc",
    ER: "290d63e0-40d0-4bab-ac47-3d627f02e426",
    EE: "7dfbc476-fd44-4425-b2e4-917bf9354eef",
    ET: "f0aac127-dae2-4eaf-b3e6-6f9ba6d6b568",
    FK: "ff2eaf3e-904c-488d-b81d-7d98c31f8954",
    FO: "618bb091-862c-42fe-9d0b-0d499d4fabe5",
    FJ: "2fe01cf6-6bf5-499e-ad52-eb440073a2f9",
    FI: "b3c5b4a8-6cd6-4d93-ab11-83c3158142ce",
    FR: "1d66c444-5f4c-431a-bccf-b810173e06c2",
    GF: "d5161b97-0906-4460-a2dc-410b7ce3e34d",
    PF: "f3d5f8b5-d97f-4489-b3a7-ac68dfc3db52",
    TF: "332ea315-6322-43ab-9cb6-c4394460c41a",
    GA: "c5d4785e-4890-4222-818f-fed9751a6800",
    GM: "329fa53d-84ee-437b-b545-5facf686963b",
    GE: "1599d763-9583-4d2b-9330-3796ab924436",
    DE: "c26a92ea-7d68-4850-9140-54e6dc008892",
    GH: "a614088a-4b67-419e-8fe9-b8e3c6e1bb85",
    GI: "782a5ca8-a820-4f91-9c16-581a7e5e6119",
    GR: "9fb2e29a-0593-4c4a-9a1f-70a66a06548e",
    GL: "c016b9c9-2432-44df-91d7-7358c5ec8def",
    GD: "46d1380a-9a19-4085-a7e0-3b57e22817d0",
    GP: "372911b0-003c-46ab-b4bf-6738c984f7d7",
    GU: "d3d389a6-89af-4494-baa4-928e3a023a07",
    GT: "7ea463ef-e0d4-45db-9444-64f6807f86f2",
    GG: "88f59cbf-40e8-4a19-95f3-54e7c8ef16f4",
    GN: "180b2bbb-fba9-468e-a3ad-4c77a34e496a",
    GW: "815b51c2-323a-4841-8352-2ad792364f6f",
    GY: "b6baa1cc-bc05-4e67-9283-6bf70ffb6d5b",
    HT: "a6f38bf7-4090-4b02-8f04-41ef63b2dce3",
    HM: "f1da4f0e-01ce-4bbe-bbec-6be6455c99f6",
    HN: "aecdbdd7-65e0-46ee-8b0d-9793a1d217ef",
    HK: "2df862f7-fb9b-45ab-8b3d-dc25e81eab7e",
    HU: "8d1c5a19-27ad-4c7b-bdfe-0c85cf840e5f",
    IS: "5132a5be-dc94-404d-895e-609a646d75ed",
    IN: "0ba2ee7d-5a1a-487b-b919-21844351c612",
    ID: "2ad1eadc-b228-477a-b102-70c373740191",
    IR: "21ee2e8f-0ee8-45cb-9d8d-bfa41ebf94dd",
    IQ: "3d3d6e81-52c8-427c-9258-e1056571440b",
    IE: "75da2b8e-b347-4af6-8017-db8d21ee8eb9",
    IL: "1df6a3af-7e42-4da9-80ef-62f2606efe60",
    IT: "37734ea6-7554-47c9-9925-db636c3b95d4",
    JM: "b091988f-1dfb-4010-bd09-ec8b190cfdb5",
    JP: "55217b46-2023-4322-a435-31d0e9c4317b",
    JE: "6437a4e9-271a-446c-979b-e1e8d89e8c0b",
    JO: "50393084-b048-4c15-8d57-36e5f1bf9cf6",
    KZ: "4a588289-1966-4cf1-b91c-7dfa96dbc62c",
    KE: "963d5891-371b-4b89-b287-d9b3e9919aac",
    KI: "3a51a483-7684-414c-ac83-3d6ca93c879c",
    // XK: "9be925cb-6931-4f87-9f14-52e3862af5b5",
    KW: "6c272801-bfae-43ea-af8a-0dc54a0d63e1",
    KG: "a67beca3-2f78-4000-8aaa-bb9c2a0bb63e",
    LA: "ca18be2a-17b5-4c9e-b3ce-c0c52c3b0e2d",
    LV: "c4903b36-6ce2-4361-a117-d925950c3008",
    LB: "fddc3758-9507-482f-a9fd-aacc235d2c7e",
    LS: "1dbf907c-27ae-4b01-9f48-ff626500b2cf",
    LR: "605a6852-9582-4b14-8615-188b7a14128e",
    LY: "01d5fc8a-41bd-4445-8ca8-d22887bc3696",
    LI: "e705ec12-cf94-4996-b05c-1b01e80236f7",
    LT: "f3725bec-88c2-4978-8541-fe568d4273e2",
    LU: "945a93dd-415e-4f47-9ef8-db71bc5b836b",
    MO: "0a3a8aa4-3a6e-49ec-a766-487a66468bbc",
    MK: "5662b6cd-78fc-4b06-9afa-f5cd6ff683d8",
    MG: "39596f6b-8ba8-4dc7-8846-1671c6987b5b",
    MW: "b5829577-9d5a-4985-8ae4-85d953b2e4b6",
    MY: "8f3ceb29-e69f-4df4-aadf-71ac138fc75f",
    MV: "65d02434-eb09-42a2-a137-ee238677114b",
    ML: "8248e17f-d90e-4e0c-8fdf-d6178911c34f",
    MT: "b2da98c4-0491-4444-92e3-c9950ea97795",
    IM: "c545a2be-ea39-43d1-a29b-6f9780fc4db6",
    MH: "611973dc-2a4f-4964-b211-eb38c9140950",
    MQ: "1b80e918-e70a-4ae3-8a59-6e506ee2b032",
    MR: "51455817-77dc-424e-8aa8-a646a5805107",
    MU: "2c6f0f67-a97d-48c9-9b32-56a2452fd52b",
    YT: "2ddefa55-cafe-4ec9-97d7-a41b09392b2e",
    MX: "e4d7050a-80a3-4b1a-a45c-2ccce941f07f",
    FM: "bb10e1d2-fb63-4375-a2be-4fb09c5d74c2",
    MD: "e708f120-a339-4ef1-bcbf-99559afe3e1f",
    MC: "b8bca9e2-e3ad-48ae-a664-6a1628a9307c",
    MN: "5d53751c-ddc3-4541-a6c6-57d6f573e930",
    ME: "0382918d-2766-4f18-912c-1bb0a478e8e3",
    MS: "81fc5e84-ec44-41c5-ada2-e32c8ebed3cf",
    MA: "5873b7bc-2e63-4ce4-a723-0e14e1d33f5a",
    MZ: "f67dbbdb-d5b0-4605-95b3-5bc085c6cd7b",
    MM: "0436559e-9f18-43e3-b692-e6221842b51f",
    NA: "62217208-c01e-4bad-845d-fd8ac7521982",
    NR: "c2b185f4-2caf-422e-89fd-1827fb925def",
    NP: "fbf8ce2c-a9f3-49ff-b61a-940f732f55e0",
    NL: "b73ec595-fe76-4614-9c7a-788dae036a98",
    NC: "c449df9f-da55-46d1-b8d2-62593f4c14d7",
    NZ: "847d5656-8809-4784-a309-149a571a518d",
    NI: "61f24fc7-aa19-4ca2-824b-f38feb82dd52",
    NE: "baf54159-98cd-4732-bda0-c9d120eede60",
    NG: "8168b09a-19cb-436c-9dfa-264fa2412160",
    NU: "40ef9f27-ca4d-4e28-bd56-b1f220479f47",
    NF: "faae8340-de1a-4f73-b276-c38225754dfc",
    KP: "199dc430-fc3b-4259-9c41-55edfb66ddaf",
    MP: "2a1494f6-66ec-4e77-a3d4-86af85984844",
    NO: "40c0d595-675d-4007-9574-f5c0aabaf1a7",
    OM: "ffe56a62-f195-482c-ab17-34e666c1adce",
    PK: "0a84d9d7-b487-4d44-a9f1-125a4c4acd2a",
    PW: "0adf1743-523b-432e-b235-35aeae2481f6",
    PS: "00308c1f-abe3-4046-a080-67a2b10be599",
    PA: "6c897f62-457f-4d53-80b6-21b68c061ee3",
    PG: "c6d40677-200c-48e1-99a3-3f25b1312ba4",
    PY: "498e1273-b09a-488b-a19e-431029995706",
    PE: "f49cb2fe-3493-4c46-99c8-70c9a44cc64d",
    PH: "f1384d65-9e7f-46d5-b51d-e3ed3b48364b",
    PN: "f1659a74-1c29-4483-a424-7bb865f8f9b2",
    PL: "a50201a0-1c5c-47be-92dc-77536ab6fadc",
    PT: "071b1e40-9b3a-4043-b5ef-144ee34faa9a",
    PR: "a6ad050b-8d75-4a59-b728-7cb73a0a00b5",
    QA: "80755e68-8f4f-409a-bc18-b4eea4d45e51",
    RE: "f266dd7b-ae1e-4222-92a9-7562da0b02f0",
    RO: "b26d0d75-05cb-4424-813d-dd2dc988a70f",
    RU: "ba89c58c-b1f2-4b12-abde-542d634cbe6a",
    RW: "55dcc819-d529-449d-a4e5-e30e99eb2221",
    SH: "bbad0225-0e24-41d7-90be-d381ee2cbc6b",
    KN: "7a012cdb-a7e4-4cd3-9e7f-755f26f4af3a",
    LC: "ef6d457d-83b1-4ffa-8689-33e05ecf00ac",
    PM: "fe6054e1-38a8-44b1-809d-b3721143b7a7",
    VC: "368d008d-58cb-4a71-83ad-1b3549a1165a",
    BL: "7d53c9a7-9adb-40cf-9123-845f4be92335",
    MF: "3f28622b-1055-4212-9b3c-c73f4e0620bd",
    WS: "bf91c377-25f1-48ee-93bc-c2d1a97f92cf",
    SM: "2a337b65-2ce1-4592-a9e2-538ef3753466",
    ST: "15aeeca2-35af-4e23-8a88-37150ac5b4c7",
    SA: "d3e84f8c-76d1-4e10-ae0f-64ea7c908690",
    SN: "7b40635e-6d9a-4289-8219-b5199d69b9cb",
    RS: "af3bc2ba-da5c-4de4-8cf5-b38dd3cb283f",
    SC: "cbe195e5-b471-43eb-8e99-0c5a7694d071",
    SL: "3900ef54-da6d-482e-ae3b-c473fb75cdd2",
    SG: "ceaf6533-a23c-4c0a-a6fb-182d2299b20b",
    SX: "d6f0e39c-89e4-4ceb-9004-610ad0bf9e58",
    SK: "ce6b6272-a1a6-43d8-b5ea-14e0d248ad42",
    SI: "20d979ea-0e73-4fc4-b167-4ea75e2585bd",
    SB: "2ea5e80d-98d6-4f5c-9335-d085809c4e9f",
    SO: "7d9069db-bc07-430f-806f-4e940446c1e0",
    ZA: "eacfb7f3-8873-4956-a4a9-a11bee6314da",
    GS: "4d26238f-e550-49b9-a3c2-895b0ece2924",
    KR: "a7a4c01c-d8e2-4163-b7d7-51e40587b481",
    SS: "9372b96f-7727-4df6-bbf2-4e23e88b6274",
    ES: "51ca1742-22fd-48e0-a1e3-954dc14d42ed",
    LK: "267bdb56-1b9c-491f-80b0-419489624f27",
    SD: "99567646-66be-4114-a4cf-721b1a832fbf",
    SR: "6d5758d8-a27a-44a8-b207-8d7c2836555d",
    SJ: "a89462cd-711f-4eb3-a956-f16d6ff50767",
    SZ: "ffffc449-73b4-4d73-af55-ecdc2bce6e6d",
    SE: "b7eb89cb-6b33-463e-8e64-e15c20c48dcb",
    CH: "a7bdfad9-17cd-4aae-8b19-abb72185797c",
    SY: "a7bd0595-00a7-4405-8755-1a6c7c50554a",
    TW: "ebf0bf82-a1a8-4fd6-ac21-df6e502895a9",
    TJ: "7956789b-4e3a-433d-9b4e-a9672e3cfb1e",
    TZ: "59045309-deda-4292-ba27-89fbd7623c2a",
    TH: "c7416177-836c-45e1-b5b5-088790766a1f",
    BS: "4db525e5-6679-41a9-85e5-f2aff9c2d5c0",
    TG: "b2f04e27-95bd-4920-81fb-344a70e48081",
    TK: "2bed4094-e1dd-44af-98e2-ae9bc183a685",
    TO: "21d4e19a-bc29-461a-8c7a-579735a15ead",
    TT: "8d285b36-ae3c-46f5-917e-30be29a476c4",
    TN: "80f47951-0bed-4634-a6f0-f8719818c3be",
    TR: "6772fdfa-80b9-450b-aec9-07784e8eea31",
    TM: "ff8f9b96-dbd8-4c02-9dd6-3ac87b61a2ce",
    TC: "5e471e74-fc5f-49ec-9486-5e706067d6d8",
    TV: "62e159b8-e769-4650-a2d0-85525c196450",
    UG: "04676239-f802-48b5-a1df-c13435a3d0e7",
    UA: "fb6b2efe-1da5-43c2-a68d-1ebd960c3172",
    AE: "3926ea3c-1913-4bcd-9bf3-85b59ebf4846",
    GB: "bf875cdd-24f0-42b4-bfe1-b7317a17623e",
    US: "11481fc9-d235-4e71-add3-2ad5bfeedc4b",
    UM: "204f5513-384c-447a-826c-f65279d7d46a",
    UY: "8c0922b1-296a-425a-bc49-da7ac2757795",
    UZ: "e7730b09-b310-456c-90fc-71555bd436d5",
    VU: "6719fc3b-5e1d-45b7-8b8e-7f66fd60fe0b",
    VA: "e8e303b3-ceb8-4067-bccd-d84a8cffe195",
    VE: "9d85e32b-549b-4c8b-88e4-98d974ea6719",
    VN: "056e540d-d344-4ef3-900d-0cf805ca6061",
    VG: "ec7dd5b3-4307-450d-98e9-642223a1e751",
    VI: "5aa1204e-ab47-4d79-94d7-9304996c3f1b",
    WF: "0d995948-a377-4d0f-aa8a-3b3a035cb7c0",
    EH: "6b6abc4f-8cd2-4489-bac4-1d341fd002f6",
    YE: "75bdff13-9a0f-4ba7-a669-f16d797443a6",
    ZM: "1c8edbde-6343-43b7-a7c9-f877d5829bbc",
    ZW: "ecc9d0cf-c0d7-41de-9e08-4776f1968835",
}
export const countryMap: Record<string, Country> = mapValues(countryIdMap, (id, code) => ({
    ...countryData.getCountry(code),
    id,
    code
}))
export const countryNameMap: Record<string, Country> = keyBy(countryMap, 'name')

export const countryCodes: string[] = Object.keys(countryMap)

export function countryCodeToCountry(code?: string): Country | null {
    return code && countryMap[code] ? countryMap[code] : null
}

export function countryNameToCountry(countryName?: string): Country | null {
    return countryName && countryNameMap[countryName] ? countryNameMap[countryName] : null
}

export function parseCountry(codeOrCountryName?: string): Country | null {
    return countryCodeToCountry(codeOrCountryName) || countryNameToCountry(codeOrCountryName)
}

const countries: Country[] = Object.values(countryMap)

export default countries


