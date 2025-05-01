import IHotel from "./IHotel";

export type LoaderResult = IHotel[] | undefined

export default interface ILoader {
    hotels: Promise<LoaderResult>,
}