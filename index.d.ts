import React from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

declare module "RNVideoEnhanced" {
	interface VideoProps {
		repeat: boolean;
		paused: boolean;
		type: 'audio' | 'video';
		showControls: boolean;
		youtubeId: number;
		live: boolean;
		connection: boolean;
		maxWidth: number | undefined;
		content: any;
		onRefresh: () => void;
		toSupport: () => void;
		onBack: () => void;
		onEndLive: () => void;
		onStartLive: () => void;
		onFullscreen: (isFullscreen: boolean) => void;
		goToNextLesson: () => void;
		goToPreviousLesson: () => void;
		onUpdateVideoProgress: (
		  videoId: number,
		  id: number,
		  lengthInSec: number,
		  currentTime: number,
		  mediaCategory: string
		) => void;
		styles: {
		  timerCursorBackground: string;
		  beforeTimerCursorBackground: string;
		  settings: {
			cancel: StyleProp<TextStyle>;
			selectedOptionTextColor: string;
			separatorColor?: string;
			background?: string;
			optionsBorderColor?: string;
			unselectedOptionTextColor?: string;
			save: StyleProp<TextStyle>;
			downloadIcon: {};
		  };
		  alert: {
			titleTextColor?: string;
			subtitleTextColor?: string;
			background?: string;
			contactSupport: StyleProp<TextStyle>;
			reloadLesson: {};
		  };
		};
	}
	declare class Video extends React.Component<Record<VideoProps>, any> {}

    export default Video;
}