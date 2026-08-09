type SortableBlogPost = {
  id: string;
  data: {
    date: Date;
    publishedAt?: Date;
    seriesOrder?: number;
  };
};

// Publication order is intentionally based only on immutable original-publication
// metadata. Revision metadata such as `updated` must never promote an older post.
const getPublicationSortTime = (post: SortableBlogPost) =>
  (post.data.publishedAt ?? post.data.date).valueOf();

export const compareBlogPosts = (a: SortableBlogPost, b: SortableBlogPost) => {
  const publicationDelta = getPublicationSortTime(b) - getPublicationSortTime(a);
  if (publicationDelta !== 0) return publicationDelta;

  const dateDelta = b.data.date.valueOf() - a.data.date.valueOf();
  if (dateDelta !== 0) return dateDelta;

  const seriesOrderDelta = (b.data.seriesOrder ?? -1) - (a.data.seriesOrder ?? -1);
  if (seriesOrderDelta !== 0) return seriesOrderDelta;

  return b.id.localeCompare(a.id);
};
