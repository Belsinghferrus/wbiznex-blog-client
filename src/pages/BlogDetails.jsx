import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useBlogStore from '../store/blogStore';
import './css/blogdetails.css';
import Spinner from '../utils/Spinner';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';

const Blog = () => {
  const { id } = useParams();
  const { selectedBlog, fetchBlogById } = useBlogStore();
  const shareUrl = window.location.href; // current blog URL
  const title = selectedBlog?.title || 'Check out this blog!';
  const description = 'Check out this blog on WBIZNEX!';


  useEffect(() => {
    fetchBlogById(id);
  }, [id, fetchBlogById]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({
          title: selectedBlog.title,
          text: 'Check out this blog on WBIZNEX!',
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Sharing failed:', err);
    }
  }

  if (!selectedBlog) return <Spinner />;

  return (
    <div className="blog-detail-container">
      <h1 className="blog-detail-title">{selectedBlog.title}</h1>
      <img src={selectedBlog.image} alt={selectedBlog.title} className="blog-detail-image" />
      <div className="blog-detail-content" dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
      <div className="blog-actions">
        <button className="share-button" onClick={handleShare}>
          🔗 Share this blog
        </button>
        <div className="share-section">
          <p className="share-text">Share this Blog:</p>
          <div className="share-icons">
            <FacebookShareButton url={shareUrl} quote={`${title} - ${description}`}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl} title={`${title} - ${description}`}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <LinkedinShareButton url={shareUrl} title={title} summary={description} source="WBIZNEX">
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            <WhatsappShareButton url={shareUrl} title={`${title} - ${description}`}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>

          </div>
        </div>
        <Link to="/" className="back-home-button">
          ⬅️ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Blog;
