import './photo-video.scss';

export const PhotoVideo = () => {
    return (
        <div className="photo-video__container">
            <video src="./video/photos.mp4" controls={null} autoPlay={true} muted loop={true} />
        </div>
    )
}
