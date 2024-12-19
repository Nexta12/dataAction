export const DateFormatter = (value: Date | string | number): string  => {
    const date = new Date(value);
    
    if (!isNaN(date.getTime())) {
      // Format the date as DD/MM/YY
      return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }).format(date);
    }
    
    return String(value); 
  };
  