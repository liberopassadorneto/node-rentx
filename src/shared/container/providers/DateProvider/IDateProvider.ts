interface IDateProvider {
    dateNow(): Date;
    convertToUtc(date: Date): string;
    compareInHours(end_date: Date, start_date: Date): number;
}

export { IDateProvider };
