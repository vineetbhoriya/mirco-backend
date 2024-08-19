import { model } from 'mongoose';
import { UserSchema } from './userSchema';
import { IUser } from './userDocument';

export const User = model<IUser>('User', UserSchema);
