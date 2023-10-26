import Stack from '@mui/material/Stack';

export default function TeamStatus({currentMembers, vacancies}) {
  return (
      <Stack direction='row' spacing={1} className="contact-info">
        <span>Currently</span>
        <span>{currentMembers}</span>
        <span>Look for</span>
        <span>{vacancies} more</span>
      </Stack>
   
  );
}