import { useState, useEffect, useRef } from 'react';
import useDebounce from '@/utils/debounce';

export function useSpotifyPlayer(currentTrack) {
  const controlRef = useRef();
  const [controller, setController] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [timing, setTiming] = useState({});

  /**
   * * * * * * * * * * * * *
   * * * Seek Related * * *
   * * * * * * * * * * * * *
   */
  const [localPosition, setlocalPosition] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const preventFeedbackRef = useRef(false);
  const debouncedlocalPosition = useDebounce(localPosition, 300);


  /**
   * * * * * * * * * * * * * * *
   * * * Initilialization  * * *
   * * * * * * * * * * * * * * *
   */
  useEffect(() => {
    function initializePlayer(IFrameAPI) {
      const options = {
        uri: '',
        width: 0,
        height: 0,
      };

      function callback(EmbedController) {
        if (EmbedController) {
          setController(EmbedController);
          setIsLoaded(true);

          EmbedController.addListener('playback_update', (event) => {
            setIsPlaying(!event.data.isPaused);
            setTiming({
              duration: event.data.duration,
              position: event.data.position
            });
          });

          EmbedController.addListener('ready', () => {
            console.log('Player is ready');
          });

          EmbedController.addListener('error', (error) => {
            console.error('Player error:', error);
          });
        }
      }

      IFrameAPI.createController(controlRef.current, options, callback);
    }

    window.onSpotifyIframeApiReady = initializePlayer;
  }, []);

  /**
   * * * * * * * * * * * * * * * * * * * * *
   * * * Track Loading & Playback  * * *
   * * * * * * * * * * * * * * * * * * * * *
   */
  useEffect(() => {
    if (controller && currentTrack?.uri && isLoaded) {
      console.log("Updating track to:", currentTrack);
      controller.loadUri(currentTrack.uri);
      controller.play();
    }
  }, [currentTrack, controller, isLoaded]);

  /**
   * * * * * * * * * * * * * * * * * * * *
   * * * Seek Position Management * * *
   * * * * * * * * * * * * * * * * * * * *
   */
  useEffect(() => {
    const shouldUpdateSlider = !isSeeking && !preventFeedbackRef.current;
    
    if (shouldUpdateSlider) {
      setlocalPosition(timing.position || 0);
    }

    if (preventFeedbackRef.current) {
      const timer = setTimeout(() => {
        preventFeedbackRef.current = false;
      }, 25);
      return () => clearTimeout(timer);
    }
  }, [timing.position, isSeeking]);

  useEffect(() => {
    if (isSeeking) {
      controller.seek(debouncedlocalPosition / 1000);
      setIsSeeking(false);
      preventFeedbackRef.current = true;
    }
  }, [debouncedlocalPosition, controller]);


  /**
   * * * * * * * * * * * * * * * *
   * * * Control Functions * * *
   * * * * * * * * * * * * * * * *
   */

  function togglePlayback() {
    if (controller && isLoaded) {
      try {
        controller.togglePlay();
      } catch (error) {
        console.error('Toggle play error:', error);
      }
    }
  }

  function handlePrevious(){
    console.log('Previous track');
  }

  function handleNext() {
    console.log('Next track');
  };

  function seek(event) {
    setlocalPosition(event.target.value);
    setIsSeeking(true);
    controller.play();
  }

  return {
    controlRef,
    controller,
    isPlaying,
    isLoaded,
    timing,
    localPosition,
    isSeeking,
    togglePlayback,
    handlePrevious,
    handleNext,
    seek
  };
}