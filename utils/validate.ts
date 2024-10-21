export const required = (message: string): boolean => message.trim() !== "";
export const validateEmail = (message: string): boolean => emailRegex(message);
export const numberOnly = (message: string): boolean => numberRegex(message);
export const charOnly = (message: string): boolean => charRegex(message);
export const minimumEightChar = (message: string): boolean => message.length >= 8;
export const passwordMatch = (message1: string, message2: string): boolean => message1 === message2;

export const elementsNotEmpty = (elements: string[]): boolean => elements.length !== 0;

export const emailRegex = (value: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
export const charRegex = (value: string) => /^[A-Za-z\s]+$/.test(value);
export const numberRegex = (value: string) => /^[0-9]+$/.test(value);
export const noWhiteSpaceRegex = (value: string) => /^(?! ).*[^]$/.test(value);
