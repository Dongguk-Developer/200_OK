import { useQuery } from '@tanstack/react-query';

const fetchPlaceholderImage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos/1');

  if (!response.ok) {
    throw new Error('Failed to fetch image');
  }
  return response.json();
};

const useFetchExampleImageQuery = () => {
  return useQuery({
    queryKey: ['placeholderImage'],
    queryFn: fetchPlaceholderImage,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 30, // 30 minutes
  });
};

export default useFetchExampleImageQuery;
