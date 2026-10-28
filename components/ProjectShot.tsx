import { demoVideoUrlByProjectId, introUrlByProjectId } from "@/config/media";
import type { Project } from "@/data/projects";
import { youtubeEmbedUrl } from "@/lib/demoVideo";
import { placeholderShot } from "@/lib/placeholderShot";
import { IconLink, IconPlay } from "./icons";

type ProjectShotProps = {
  project: Project;
};

export function ProjectShot({ project }: ProjectShotProps) {
  const poster = project.shot ?? placeholderShot(project.title);
  const videoUrl = demoVideoUrlByProjectId[project.id] ?? "";
  const hasVideoSlot = project.id in demoVideoUrlByProjectId;
  const introUrl = introUrlByProjectId[project.id] ?? "";
  const hasIntroSlot = introUrl !== "";
  const demoControl =
    hasVideoSlot && videoUrl ? (
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <IconPlay />
        Demo video
      </a>
    ) : hasVideoSlot && !videoUrl ? (
      <span>
        <IconPlay />
        Demo video
      </span>
    ) : !hasVideoSlot && !project.shot ? (
      <span>
        <IconPlay />
        Demo video
      </span>
    ) : null;

  const siteControl = project.site ? (
    <a href={project.site} target="_blank" rel="noopener noreferrer">
      <IconLink />
      Visit site
    </a>
  ) : !project.shot ? (
    <span>
      <IconLink />
      Visit site
    </span>
  ) : null;

  const youtubeEmbedIntro = introUrl ? youtubeEmbedUrl(introUrl) : null;
  const youtubeEmbedDemo = videoUrl ? youtubeEmbedUrl(videoUrl) : null;
  const inlineVideo = hasVideoSlot ? (
    youtubeEmbedDemo ? (
      <iframe
        className="shot-media"
        src={youtubeEmbedDemo}
        title={`${project.title} demo video`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    ) : (
      <video
        className="shot-media"
        poster={poster}
        src={videoUrl || undefined}
        controls={Boolean(videoUrl)}
        playsInline
        preload="none"
      />
    )
  ) : null;

  const media = hasIntroSlot ? (
    youtubeEmbedIntro ? (
      <iframe
        className="shot-media"
        src={youtubeEmbedIntro}
        title={`${project.title} demo video`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    ) : (
      inlineVideo
    )
  ) : (
    inlineVideo ?? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={poster} alt={`${project.title} screenshot`} />
    )
  );

  const hasActions = Boolean(demoControl || siteControl);

  if (!hasActions) {
    return <div className="shot">{media}</div>;
  }

  if (videoUrl) {
    return (
      <div className="shot-wrap">
        <div className="shot">{media}</div>
        <div className="shot-actions">
          {demoControl}
          {siteControl}
        </div>
      </div>
    );
  }

  return (
    <div className="shot" tabIndex={0}>
      {media}
      <div className="mask">
        {demoControl}
        {siteControl}
      </div>
    </div>
  );
}
