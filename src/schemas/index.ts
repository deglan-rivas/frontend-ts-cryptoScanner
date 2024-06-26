import { z } from "zod";

export const CommonCurrencySchema = z.object({
  name: z.string(),
  code: z.string(),
})

export const CryptoCurrencySchema = z.object({
  CoinInfo: z.object({
    Name: z.string(),
    FullName: z.string(),
  })
})

export const CryptoCurrenciesSchema = z.array(CryptoCurrencySchema)

export const SearchSchema = z.object({
  commonCoin: z.string(),
  cryptoCoin: z.string(),
})

export const CryptoConversionSchema = z.object({
  IMAGEURL: z.string(),
  PRICE: z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  CHANGEPCT24HOUR: z.string(),
  LASTUPDATE: z.string()
})