import React from 'react';
import YouTubeVideo from '../../Molecules/YoutubeVideo/YoutubeVideo';
import './VideoSection.css'
import { Container, Row, Col } from 'react-bootstrap';


const VideoSection = () => {
    const videoId = 'WHRnvjCkTsw';
    const videoTitle = 'Titolo del tuo video';

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className="video-section">
                            <YouTubeVideo videoId={videoId} title={videoTitle} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>


    );
};

export default VideoSection;
