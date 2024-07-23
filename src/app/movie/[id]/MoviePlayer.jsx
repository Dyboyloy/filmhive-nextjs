'use client';

export default function MoviePlayer({ params }) {
    const movieID = params.id;
    const player_url = 'https://vidsrc.xyz/embed/movie';
  return (
    <div>
        <iframe src={`${player_url}/${movieID}`} allowFullScreen height={'300px'} width={'400px'} className='md:h-[450px] md:w-[650px]' ></iframe>
    </div>
  )
}
