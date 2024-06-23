import { format } from "date-fns";
import { id } from "date-fns/locale";

const TZ_ID = { locale: id };

/**
 *
 * @param value
 * @returns
 */
export function formatDate(value: string | number | Date): string {
  return format(new Date(value), "MMM yyyy", TZ_ID);
}
