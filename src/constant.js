const env = process.env.URL_ENV || 'development'

const mapApiUrl = {
  development: 'https://api-sandbox.sharaikios.com/v1',
  staging: 'https://api-sandbox.sharaikios.com/v1',
  production: 'https://api.sharaikios.com/v1',
}

const mapApiFile = {
  development: 'https://api-sandbox.sharaikios.com',
  staging: 'https://api-sandbox.sharaikios.com',
  production: 'https://api.sharaikios.com',
}

const ID_SUPER_ADMIN = '270294e3-07b5-4953-999c-89b5242f26e4'
const ID_ADMIN_PORTAL = 'f0c268cf-6c96-4046-abc8-6cd87160165e'
const ID_ADMIN_TRASMI = 'deafd86a-98cf-4738-8fb9-7b9135480bba'
const ID_ADMIN_INSURANCE = '716bad19-5ffb-40b1-ae4d-2b7d1b0d90cd'
const ID_ADMIN_DEALER = 'abf2cfa7-c805-4469-a2f6-736bf89e2995'
const ID_ADMIN_SERVICE_CENTER = '02ba6773-db32-4f25-aa6f-9989527f16a5' // Bengkel
const ID_ADMIN_CUSTOMER = '598e7966-0d30-452a-9bb5-d1af3794f2ff' // BJB | BSI
const ID_USER = 'c157c7e2-f240-4a94-a4eb-382bc20cbe04' // User Aplikasi

const PRODUCT_CATEGORY = {
  ID_MOBIL: '8b867c70-efb6-43ba-9ac1-944da2fc1bd8',
  ID_MOTOR: '73ccad4f-f6f7-4f46-aac2-0e9aa0d011bb'
}

const ROLE_USER_TRASMI = [
  ID_SUPER_ADMIN,
  ID_ADMIN_TRASMI,
  ID_ADMIN_INSURANCE,
  ID_USER,
]

const VENDOR_TYPE = {
  INSURANCE: '5d2c7cdc-7e5e-4477-a0f5-2eccfcb06eec',
  DEALER: '00abcc5b-bf6d-400a-b2ba-466f93ea769b',
  SERVICE_CENTER: '74848044-1498-4c71-b2b1-9a5e47e96d17',
}

const ROLE_USER_PORTAL = [
  ID_SUPER_ADMIN,
  ID_ADMIN_PORTAL,
  ID_ADMIN_SERVICE_CENTER,
  ID_ADMIN_CUSTOMER,
  ID_ADMIN_DEALER,
]

const ROLE_USER_VENDOR = [ID_ADMIN_DEALER, ID_ADMIN_SERVICE_CENTER]

const Roles = {
  ID_SUPER_ADMIN,
  ID_ADMIN_PORTAL,
  ID_ADMIN_SERVICE_CENTER,
  ID_ADMIN_CUSTOMER,
  ID_ADMIN_DEALER,
  ID_ADMIN_TRASMI,
  ID_ADMIN_INSURANCE,
  ID_USER,
}

module.exports = {
  BASE_API_URL: mapApiUrl[env],
  BASE_API_FILE: mapApiFile[env],
  ID_ROLE: Roles,
  ID_PRODUCT_CATEGORY: PRODUCT_CATEGORY,
  ROLE_USER_PORTAL,
  ROLE_USER_TRASMI,
  ROLE_USER_VENDOR,
  VENDOR_TYPE,
}
