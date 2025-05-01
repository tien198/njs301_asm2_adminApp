import IHotel from "./IHotel";

export default interface ILoader {
    hotels : Promise<IHotel[] | undefined>,
}