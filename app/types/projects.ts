import type { RichTextContent } from '@graphcms/rich-text-types';

export type KnownTech = {
  iconSvg: string
  name: string
  startDate: string
  endDate: string
}

export type Technology = {
  name: string
}

export type ProjectSection = {
  title: string
  image: {
    url: string
  }
  video: string
}

export type Project = {
  slug: string
  title: string
  thumbnail: {
    url: string
  }
  shortDescription: string
  technologies: Technology[]
  pageThumbnail: {
    url: string
  }
  sections: ProjectSection[]
  description: {
    raw: RichTextContent
    text: string
  }
  liveProjectUrl?: string
  githubUrl?: string
}