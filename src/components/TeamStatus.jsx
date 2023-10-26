import Stack from '@mui/material/Stack';

export default function TeamStatus({currentMembers, vacancies}) {
  return (
      <Stack direction='row' spacing={1} className="contact-info">
        <span>目前</span>
        <span>{currentMembers}人</span>
        <span>缺</span>
        <span>{vacancies} 人</span>
      </Stack>
   
  );
}