export const filterData = [
  {
    items: [
      { name: { en: "Buy", it: "Acquista", uk: "Купити", ru: "Купить" }, value: "sell" },
      { name: { en: "Rent", it: "Affitta", uk: "Оренда", ru: "Аренда" }, value: "rent" },
    ],
    placeholder: { en: "Purpose", it: "Tipologia", uk: "Тип оголошення", ru: "Тип обьявления" },
    queryName: "listing_type",
  },
  {
    items: [
      { name: { en: "50,000", it: "50.000", uk: "50.000", ru: "50.000" }, value: "50000" },
      { name: { en: "100,000", it: "100.000", uk: "100.000", ru: "100.000" }, value: "100000" },
      { name: { en: "150,000", it: "150.000", uk: "150.000", ru: "150.000" }, value: "150000" },
      { name: { en: "250,000", it: "250.000", uk: "250.000", ru: "250.000" }, value: "250000" },
      { name: { en: "500,000", it: "500.000", uk: "500.000", ru: "500.000" }, value: "500000" },
      { name: { en: "750,000", it: "750.000", uk: "750.000", ru: "750.000" }, value: "750000" },
    ],
    placeholder: { en: "Min. Price (€)", it: "Prezzo min (€)", uk: "Мін. ціна (€)", ru: "Мин. цена (€)" },
    queryName: "minPrice",
  },
  {
    items: [
      { name: { en: "100,000", it: "100.000", uk: "100.000", ru: "100.000" }, value: "100000" },
      { name: { en: "150,000", it: "150.000", uk: "150.000", ru: "150.000" }, value: "150000" },
      { name: { en: "250,000", it: "250.000", uk: "250.000", ru: "250.000" }, value: "250000" },
      { name: { en: "500,000", it: "500.000", uk: "500.000", ru: "500.000" }, value: "500000" },
      { name: { en: "750,000", it: "750.000", uk: "750.000", ru: "750.000" }, value: "750000" },
      { name: { en: "1.000,000", it: "1.000.000", uk: "1.000.000", ru: "1.000.000" }, value: "1000000" },
      { name: { en: "10.000,000", it: "10.000.000", uk: "10.000.000", ru: "10.000.000" }, value: "10000000" },
    ],
    placeholder: { en: "Max Price (€)", it: "Prezzo max. (€)", uk: "Макс. ціна (€)", ru: "Макс. цена (€)" },
    queryName: "maxPrice",
  },
  {
    items: [
      { name: { en: "Lowest Price", it: "Prezzo più basso", uk: "Найнижча ціна", ru: "Низкая цена" }, value: "price-asc" },
      { name: { en: "Highest Price", it: "Prezzo più alto", uk: "Найвища ціна", ru: "Высокая цена" }, value: "price-des" },
      { name: { en: "Newest", it: "Più recenti", uk: "Найновіше", ru: "Новые" }, value: "date-asc" },
      { name: { en: "Oldest", it: "Più vecchi", uk: "Найстаріше", ru: "Старые" }, value: "date-desc" },
      { name: { en: "Verified", it: "Verificato", uk: "Перевірено", ru: "Проверенные" }, value: "verified-score" },
    ],
    placeholder: { en: "Sort", it: "Ordina", uk: "Сортування", ru: "Сортировка" },
    queryName: "sort",
  },
  {
    items: [
      { name: { en: "50", it: "50", uk: "50", ru: "50" }, value: "50" },
      { name: { en: "100", it: "100", uk: "100", ru: "100" }, value: "100" },
      { name: { en: "200", it: "200", uk: "200", ru: "200" }, value: "200" },
      { name: { en: "500", it: "500", uk: "500", ru: "500" }, value: "500" },
      { name: { en: "1000", it: "1000", uk: "1000", ru: "1000" }, value: "1000" },
    ],
    placeholder: { en: "Area (sqm)", it: "Superficie (mq)", uk: "Площа (кв.м)", ru: "Площадь (кв.м)" },
    queryName: "area",
  },
  {
    items: [
      { name: { en: "1", it: "1", uk: "1", ru: "1" }, value: "1" },
      { name: { en: "2", it: "2", uk: "2", ru: "2" }, value: "2" },
      { name: { en: "3", it: "3", uk: "3", ru: "3" }, value: "3" },
      { name: { en: "4", it: "4", uk: "4", ru: "4" }, value: "4" },
      { name: { en: "5", it: "5", uk: "5", ru: "5" }, value: "5" },
      { name: { en: "6", it: "6", uk: "6", ru: "6" }, value: "6" },
      { name: { en: "7", it: "7", uk: "7", ru: "7" }, value: "7" },
      { name: { en: "8", it: "8", uk: "8", ru: "8" }, value: "8" },
      { name: { en: "9", it: "9", uk: "9", ru: "9" }, value: "9" },
      { name: { en: "10", it: "10", uk: "10", ru: "10" }, value: "10" },
    ],
    placeholder: { en: "Bedrooms", it: "Camere da letto", uk: "Спальні", ru: "Спальни" },
    queryName: "bedrooms",
  },
  {
    items: [
      { name: { en: "1", it: "1", uk: "1", ru: "1" }, value: "1" },
      { name: { en: "2", it: "2", uk: "2", ru: "2" }, value: "2" },
      { name: { en: "3", it: "3", uk: "3", ru: "3" }, value: "3" },
      { name: { en: "4", it: "4", uk: "4", ru: "4" }, value: "4" },
      { name: { en: "5", it: "5", uk: "5", ru: "5" }, value: "5" },
      { name: { en: "6", it: "6", uk: "6", ru: "6" }, value: "6" },
      { name: { en: "7", it: "7", uk: "7", ru: "7" }, value: "7" },
      { name: { en: "8", it: "8", uk: "8", ru: "8" }, value: "8" },
      { name: { en: "9", it: "9", uk: "9", ru: "9" }, value: "9" },
      { name: { en: "10", it: "10", uk: "10", ru: "10" }, value: "10" },
    ],
    placeholder: { en: "Bathrooms", it: "Bagni", uk: "Ванни", ru: "Ванные" },
    queryName: "bathrooms",
  },
  {
    items: [
      { name: { en: "Apartment", it: "Appartamento", uk: "Квартира", ru: "Квартира" }, value: "apartment" },
      { name: { en: "Bifamiliar", it: "Bifamiliare", uk: "Дуплекс", ru: "Дуплекс" }, value: "bifamiliar" },
      { name: { en: "Villa", it: "Villa", uk: "Вілла", ru: "Вилла" }, value: "villa" },
      { name: { en: "Rustic", it: "Rustico", uk: "Rustico", ru: "Rustico" }, value: "rustic" },
      { name: { en: "Detached", it: "Indipendente", uk: "Будинок", ru: "Дом" }, value: "detached" },
    ],
    placeholder: { en: "Property Type", it: "Tipo di immobile", uk: "Тип нерухомості", ru: "Тип недвижимости" },
    queryName: "category",
  },
];

export const getFilterValues = (filterValues) => {
  const {
    listing_type,
    category,
    minPrice,
    maxPrice,
    area,
    bedrooms,
    bathrooms,
    sort,
  } = filterValues;

  const values = [
    {
      name: "listing_type",
      value: listing_type,
    },
    {
      name: "minPrice",
      value: minPrice,
    },
    {
      name: "maxPrice",
      value: maxPrice,
    },
    {
      name: "area",
      value: area,
    },
    {
      name: "bedrooms",
      value: bedrooms,
    },
    {
      name: "bathrooms",
      value: bathrooms,
    },
    {
      name: "sort",
      value: sort,
    },
    {
      name: "category",
      value: category,
    },
  ];

  return values;
};
