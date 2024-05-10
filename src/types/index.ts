import { z } from "zod";
import { CommonCurrencySchema, CryptoCurrenciesSchema, CryptoCurrencySchema, SearchSchema, } from '../schemas/index';

export type CommonCurrency = z.infer<typeof CommonCurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencySchema>
export type CryptoCurrencies = z.infer<typeof CryptoCurrenciesSchema>
export type Search = z.infer<typeof SearchSchema>