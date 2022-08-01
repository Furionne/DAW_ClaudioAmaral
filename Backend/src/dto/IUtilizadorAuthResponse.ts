import { IUtilizadorPayload } from './IUtilizadorPayload';

export interface IUtilizadorAuthResponse extends IUtilizadorPayload {
	token: string;
}
