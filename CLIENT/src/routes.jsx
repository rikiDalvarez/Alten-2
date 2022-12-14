import Home from './pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import PodcastEpisode from './pages/PodcastEpisode';
import Podcast from './pages/Podcast';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home></Home>,
	},
	{
		path: '/podcast/:podcastId',
		element: <Podcast></Podcast>,
	},
	{
		path: '/podcast/:podcastId/episode/:episodeId',
		element: <PodcastEpisode></PodcastEpisode>,
	},
]);

export default router;