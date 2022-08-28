import useSWR from "swr";

export interface StudentDetailProps {
	studentId: string;
}

const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(`/student/${studentId}`, {
    revalidateOnFocus: false,
    dedupingInterval: MILLISECOND_PER_HOUR 
  });

	return <div>Name: {data?.name || '--'}</div>;
}
