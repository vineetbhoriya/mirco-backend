import { model } from 'mongoose';
import { IAddress } from './addressDocument';
import { addressSchema } from './addressSchema';


export const Address = model<IAddress>('Address', addressSchema);
