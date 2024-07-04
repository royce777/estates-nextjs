export const filterData = [
  {
    items: [
      { name: "Buy", value: "sell" },
      { name: "Rent", value: "rent" },
    ],
    placeholder: "Purpose",
    queryName: "listing_type",
  },
  {
    items: [
      { name: "50.000", value: "50000" },
      { name: "100.000", value: "100000" },
      { name: "150.000", value: "150000" },
      { name: "250.000", value: "250000" },
      { name: "500.000", value: "500000" },
      { name: "750.000", value: "750000" },
    ],
    placeholder: "Min Price(€)",
    queryName: "minPrice",
  },
  {
    items: [
      { name: "50.000", value: "50000" },
      { name: "100.000", value: "100000" },
      { name: "150.000", value: "150000" },
      { name: "250.000", value: "250000" },
      { name: "500.000", value: "500000" },
      { name: "750.000", value: "750000" },
      { name: "1.000.000", value: "1000000" },
    ],
    placeholder: "Max Price(€)",
    queryName: "maxPrice",
  },
  {
    items: [
      { name: "Lowest Price", value: "price-asc" },
      { name: "Highest Price", value: "price-des" },
      { name: "Newest", value: "date-asc" },
      { name: "Oldest", value: "date-desc" },
      { name: "Verified", value: "verified-score" },
    ],
    placeholder: "Sort",
    queryName: "sort",
  },
  {
    items: [
      { name: "1000", value: "1000" },
      { name: "2000", value: "2000" },
      { name: "3000", value: "3000" },
      { name: "4000", value: "4000" },
      { name: "5000", value: "5000" },
      { name: "10000", value: "10000" },
      { name: "20000", value: "20000" },
    ],
    placeholder: "Area(sqm)",
    queryName: "area",
  },
  {
    items: [
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7", value: "7" },
      { name: "8", value: "8" },
      { name: "9", value: "9" },
      { name: "10", value: "10" },
    ],
    placeholder: "Bedrooms",
    queryName: "bedrooms",
  },
  {
    items: [
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7", value: "7" },
      { name: "8", value: "8" },
      { name: "9", value: "9" },
      { name: "10", value: "10" },
    ],
    placeholder: "Bathrooms",
    queryName: "bathrooms",
  },
  {
    items: [
      { name: "Apartment", value: "apartment" },
      { name: "Bifamiliar", value: "bifamiliar" },
      { name: "Villa", value: "villa" },
      { name: "Rustic", value: "rustic" },
      { name: "Detached", value: "detached" },
    ],
    placeholder: "Property Type",
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
