import { z } from "zod";
import { CommonCurrencySchema, CryptoConversionSchema, CryptoCurrenciesSchema, CryptoCurrencySchema, SearchSchema, } from '../schemas/index';

export type CommonCurrency = z.infer<typeof CommonCurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencySchema>
export type CryptoCurrencies = z.infer<typeof CryptoCurrenciesSchema>
export type Search = z.infer<typeof SearchSchema>
export type CryptoConversion = z.infer<typeof CryptoConversionSchema>