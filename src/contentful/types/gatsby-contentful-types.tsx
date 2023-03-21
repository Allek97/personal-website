export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: any;
    JSON: any;
};

export type AvifOptions = {
    lossless?: InputMaybe<Scalars["Boolean"]>;
    quality?: InputMaybe<Scalars["Int"]>;
    speed?: InputMaybe<Scalars["Int"]>;
};

export type BlurredOptions = {
    toFormat?: InputMaybe<ImageFormat>;
    width?: InputMaybe<Scalars["Int"]>;
};

export type BooleanQueryOperatorInput = {
    eq?: InputMaybe<Scalars["Boolean"]>;
    in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
    ne?: InputMaybe<Scalars["Boolean"]>;
    nin?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
};

export type ContentfulAsset = ContentfulReference &
    Node & {
        __typename?: "ContentfulAsset";
        children: Array<Node>;
        contentful_id: Scalars["String"];
        createdAt?: Maybe<Scalars["Date"]>;
        description?: Maybe<Scalars["String"]>;
        file?: Maybe<ContentfulAssetFile>;
        fixed?: Maybe<ContentfulFixed>;
        fluid?: Maybe<ContentfulFluid>;
        gatsbyImageData?: Maybe<Scalars["JSON"]>;
        id: Scalars["ID"];
        internal: Internal;
        node_locale?: Maybe<Scalars["String"]>;
        parent?: Maybe<Node>;
        resize?: Maybe<ContentfulResize>;
        spaceId?: Maybe<Scalars["String"]>;
        sys?: Maybe<ContentfulAssetSys>;
        title?: Maybe<Scalars["String"]>;
        updatedAt?: Maybe<Scalars["Date"]>;
    };

export type ContentfulAssetCreatedAtArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulAssetFixedArgs = {
    background?: InputMaybe<Scalars["String"]>;
    cornerRadius?: InputMaybe<Scalars["Int"]>;
    cropFocus?: InputMaybe<ContentfulImageCropFocus>;
    height?: InputMaybe<Scalars["Int"]>;
    quality?: InputMaybe<Scalars["Int"]>;
    resizingBehavior?: InputMaybe<ImageResizingBehavior>;
    toFormat?: InputMaybe<ContentfulImageFormat>;
    width?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAssetFluidArgs = {
    background?: InputMaybe<Scalars["String"]>;
    cornerRadius?: InputMaybe<Scalars["Int"]>;
    cropFocus?: InputMaybe<ContentfulImageCropFocus>;
    maxHeight?: InputMaybe<Scalars["Int"]>;
    maxWidth?: InputMaybe<Scalars["Int"]>;
    quality?: InputMaybe<Scalars["Int"]>;
    resizingBehavior?: InputMaybe<ImageResizingBehavior>;
    sizes?: InputMaybe<Scalars["String"]>;
    toFormat?: InputMaybe<ContentfulImageFormat>;
};

export type ContentfulAssetGatsbyImageDataArgs = {
    aspectRatio?: InputMaybe<Scalars["Float"]>;
    backgroundColor?: InputMaybe<Scalars["String"]>;
    breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    cornerRadius?: InputMaybe<Scalars["Int"]>;
    cropFocus?: InputMaybe<ContentfulImageCropFocus>;
    formats?: InputMaybe<Array<InputMaybe<ContentfulImageFormat>>>;
    height?: InputMaybe<Scalars["Int"]>;
    jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
    layout?: InputMaybe<ContentfulImageLayout>;
    outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
    placeholder?: InputMaybe<ContentfulImagePlaceholder>;
    quality?: InputMaybe<Scalars["Int"]>;
    resizingBehavior?: InputMaybe<ImageResizingBehavior>;
    sizes?: InputMaybe<Scalars["String"]>;
    width?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAssetResizeArgs = {
    background?: InputMaybe<Scalars["String"]>;
    cornerRadius?: InputMaybe<Scalars["Int"]>;
    cropFocus?: InputMaybe<ContentfulImageCropFocus>;
    height?: InputMaybe<Scalars["Int"]>;
    jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
    quality?: InputMaybe<Scalars["Int"]>;
    resizingBehavior?: InputMaybe<ImageResizingBehavior>;
    toFormat?: InputMaybe<ContentfulImageFormat>;
    width?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAssetUpdatedAtArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulAssetConnection = {
    __typename?: "ContentfulAssetConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<ContentfulAssetEdge>;
    group: Array<ContentfulAssetGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<ContentfulAsset>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type ContentfulAssetConnectionDistinctArgs = {
    field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetConnectionGroupArgs = {
    field: ContentfulAssetFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAssetConnectionMaxArgs = {
    field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetConnectionMinArgs = {
    field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetConnectionSumArgs = {
    field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
    __typename?: "ContentfulAssetEdge";
    next?: Maybe<ContentfulAsset>;
    node: ContentfulAsset;
    previous?: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    Children = "children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildren = "children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenChildren = "children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenChildrenId = "children___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenId = "children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalContent = "children___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalType = "children___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenParentChildren = "children___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenParentId = "children___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenId = "children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalContent = "children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalDescription = "children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalMediaType = "children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalOwner = "children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalType = "children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentChildren = "children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentChildrenChildren = "children___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentChildrenId = "children___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentId = "children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalContent = "children___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalDescription = "children___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalType = "children___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentParentChildren = "children___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentParentId = "children___parent___parent___id",
    ContentfulId = "contentful_id",
    CreatedAt = "createdAt",
    Description = "description",
    FileContentType = "file___contentType",
    FileDetailsImageHeight = "file___details___image___height",
    FileDetailsImageWidth = "file___details___image___width",
    FileDetailsSize = "file___details___size",
    FileFileName = "file___fileName",
    FileUrl = "file___url",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedAspectRatio = "fixed___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedBase64 = "fixed___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedHeight = "fixed___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedSrc = "fixed___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedSrcSet = "fixed___srcSet",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedSrcSetWebp = "fixed___srcSetWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedSrcWebp = "fixed___srcWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedTracedSvg = "fixed___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedWidth = "fixed___width",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidAspectRatio = "fluid___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidBase64 = "fluid___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidSizes = "fluid___sizes",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidSrc = "fluid___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidSrcSet = "fluid___srcSet",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidSrcSetWebp = "fluid___srcSetWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidSrcWebp = "fluid___srcWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidTracedSvg = "fluid___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    GatsbyImageData = "gatsbyImageData",
    Id = "id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalContent = "internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalContentDigest = "internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalDescription = "internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalFieldOwners = "internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalIgnoreType = "internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalMediaType = "internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalOwner = "internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalType = "internal___type",
    NodeLocale = "node_locale",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildren = "parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenChildren = "parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenChildrenChildren = "parent___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenChildrenId = "parent___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenId = "parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalContent = "parent___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalDescription = "parent___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalType = "parent___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenParentChildren = "parent___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenParentId = "parent___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentId = "parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalContent = "parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalContentDigest = "parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalDescription = "parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalMediaType = "parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalOwner = "parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalType = "parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentChildren = "parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentChildrenChildren = "parent___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentChildrenId = "parent___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentId = "parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalContent = "parent___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalDescription = "parent___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalOwner = "parent___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalType = "parent___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentParentChildren = "parent___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentParentId = "parent___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ResizeAspectRatio = "resize___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ResizeBase64 = "resize___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ResizeHeight = "resize___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ResizeSrc = "resize___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ResizeTracedSvg = "resize___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ResizeWidth = "resize___width",
    SpaceId = "spaceId",
    SysRevision = "sys___revision",
    SysType = "sys___type",
    Title = "title",
    UpdatedAt = "updatedAt",
}

export type ContentfulAssetFile = {
    __typename?: "ContentfulAssetFile";
    contentType?: Maybe<Scalars["String"]>;
    details?: Maybe<ContentfulAssetFileDetails>;
    fileName?: Maybe<Scalars["String"]>;
    url?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetFileDetails = {
    __typename?: "ContentfulAssetFileDetails";
    image?: Maybe<ContentfulAssetFileDetailsImage>;
    size?: Maybe<Scalars["Int"]>;
};

export type ContentfulAssetFileDetailsFilterInput = {
    image?: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
    size?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsImage = {
    __typename?: "ContentfulAssetFileDetailsImage";
    height?: Maybe<Scalars["Int"]>;
    width?: Maybe<Scalars["Int"]>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
    height?: InputMaybe<IntQueryOperatorInput>;
    width?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
    contentType?: InputMaybe<StringQueryOperatorInput>;
    details?: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
    fileName?: InputMaybe<StringQueryOperatorInput>;
    url?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
    children?: InputMaybe<NodeFilterListInput>;
    contentful_id?: InputMaybe<StringQueryOperatorInput>;
    createdAt?: InputMaybe<DateQueryOperatorInput>;
    description?: InputMaybe<StringQueryOperatorInput>;
    file?: InputMaybe<ContentfulAssetFileFilterInput>;
    fixed?: InputMaybe<ContentfulFixedFilterInput>;
    fluid?: InputMaybe<ContentfulFluidFilterInput>;
    gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    node_locale?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    resize?: InputMaybe<ContentfulResizeFilterInput>;
    spaceId?: InputMaybe<StringQueryOperatorInput>;
    sys?: InputMaybe<ContentfulAssetSysFilterInput>;
    title?: InputMaybe<StringQueryOperatorInput>;
    updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulAssetFilterListInput = {
    elemMatch?: InputMaybe<ContentfulAssetFilterInput>;
};

export type ContentfulAssetGroupConnection = {
    __typename?: "ContentfulAssetGroupConnection";
    edges: Array<ContentfulAssetEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<ContentfulAsset>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type ContentfulAssetSortInput = {
    fields?: InputMaybe<Array<InputMaybe<ContentfulAssetFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
    __typename?: "ContentfulAssetSys";
    revision?: Maybe<Scalars["Int"]>;
    type?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetSysFilterInput = {
    revision?: InputMaybe<IntQueryOperatorInput>;
    type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContentType = Node & {
    __typename?: "ContentfulContentType";
    children: Array<Node>;
    description?: Maybe<Scalars["String"]>;
    displayField?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    internal: Internal;
    name?: Maybe<Scalars["String"]>;
    parent?: Maybe<Node>;
    sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
    __typename?: "ContentfulContentTypeConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<ContentfulContentTypeEdge>;
    group: Array<ContentfulContentTypeGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<ContentfulContentType>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type ContentfulContentTypeConnectionDistinctArgs = {
    field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeConnectionGroupArgs = {
    field: ContentfulContentTypeFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulContentTypeConnectionMaxArgs = {
    field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeConnectionMinArgs = {
    field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeConnectionSumArgs = {
    field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
    __typename?: "ContentfulContentTypeEdge";
    next?: Maybe<ContentfulContentType>;
    node: ContentfulContentType;
    previous?: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
    Children = "children",
    ChildrenChildren = "children___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenId = "children___id",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentParentId = "children___parent___parent___id",
    Description = "description",
    DisplayField = "displayField",
    Id = "id",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    Name = "name",
    ParentChildren = "parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenId = "parent___children___id",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentId = "parent___id",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentId = "parent___parent___id",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentParentId = "parent___parent___parent___id",
    SysType = "sys___type",
}

export type ContentfulContentTypeFilterInput = {
    children?: InputMaybe<NodeFilterListInput>;
    description?: InputMaybe<StringQueryOperatorInput>;
    displayField?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
    __typename?: "ContentfulContentTypeGroupConnection";
    edges: Array<ContentfulContentTypeEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<ContentfulContentType>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type ContentfulContentTypeSortInput = {
    fields?: InputMaybe<Array<InputMaybe<ContentfulContentTypeFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
    __typename?: "ContentfulContentTypeSys";
    type?: Maybe<Scalars["String"]>;
};

export type ContentfulContentTypeSysFilterInput = {
    type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulEntry = {
    children: Array<Node>;
    contentful_id: Scalars["String"];
    id: Scalars["ID"];
    internal: Internal;
    node_locale: Scalars["String"];
    parent?: Maybe<Node>;
};

export type ContentfulEntryConnection = {
    __typename?: "ContentfulEntryConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<ContentfulEntryEdge>;
    group: Array<ContentfulEntryGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<ContentfulEntry>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type ContentfulEntryConnectionDistinctArgs = {
    field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryConnectionGroupArgs = {
    field: ContentfulEntryFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulEntryConnectionMaxArgs = {
    field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryConnectionMinArgs = {
    field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryConnectionSumArgs = {
    field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
    __typename?: "ContentfulEntryEdge";
    next?: Maybe<ContentfulEntry>;
    node: ContentfulEntry;
    previous?: Maybe<ContentfulEntry>;
};

export enum ContentfulEntryFieldsEnum {
    Children = "children",
    ChildrenChildren = "children___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenId = "children___id",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentParentId = "children___parent___parent___id",
    ContentfulId = "contentful_id",
    Id = "id",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    NodeLocale = "node_locale",
    ParentChildren = "parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenId = "parent___children___id",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentId = "parent___id",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentId = "parent___parent___id",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentParentId = "parent___parent___parent___id",
}

export type ContentfulEntryFilterInput = {
    children?: InputMaybe<NodeFilterListInput>;
    contentful_id?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    node_locale?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
};

export type ContentfulEntryGroupConnection = {
    __typename?: "ContentfulEntryGroupConnection";
    edges: Array<ContentfulEntryEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<ContentfulEntry>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type ContentfulEntrySortInput = {
    fields?: InputMaybe<Array<InputMaybe<ContentfulEntryFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
    __typename?: "ContentfulFixed";
    aspectRatio?: Maybe<Scalars["Float"]>;
    base64?: Maybe<Scalars["String"]>;
    height: Scalars["Float"];
    src: Scalars["String"];
    srcSet: Scalars["String"];
    srcSetWebp?: Maybe<Scalars["String"]>;
    srcWebp?: Maybe<Scalars["String"]>;
    tracedSVG?: Maybe<Scalars["String"]>;
    width: Scalars["Float"];
};

export type ContentfulFixedFilterInput = {
    aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
    base64?: InputMaybe<StringQueryOperatorInput>;
    height?: InputMaybe<FloatQueryOperatorInput>;
    src?: InputMaybe<StringQueryOperatorInput>;
    srcSet?: InputMaybe<StringQueryOperatorInput>;
    srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
    srcWebp?: InputMaybe<StringQueryOperatorInput>;
    tracedSVG?: InputMaybe<StringQueryOperatorInput>;
    width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ContentfulFluid = {
    __typename?: "ContentfulFluid";
    aspectRatio: Scalars["Float"];
    base64?: Maybe<Scalars["String"]>;
    sizes: Scalars["String"];
    src: Scalars["String"];
    srcSet: Scalars["String"];
    srcSetWebp?: Maybe<Scalars["String"]>;
    srcWebp?: Maybe<Scalars["String"]>;
    tracedSVG?: Maybe<Scalars["String"]>;
};

export type ContentfulFluidFilterInput = {
    aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
    base64?: InputMaybe<StringQueryOperatorInput>;
    sizes?: InputMaybe<StringQueryOperatorInput>;
    src?: InputMaybe<StringQueryOperatorInput>;
    srcSet?: InputMaybe<StringQueryOperatorInput>;
    srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
    srcWebp?: InputMaybe<StringQueryOperatorInput>;
    tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export enum ContentfulImageCropFocus {
    Bottom = "BOTTOM",
    BottomLeft = "BOTTOM_LEFT",
    BottomRight = "BOTTOM_RIGHT",
    Center = "CENTER",
    Face = "FACE",
    Faces = "FACES",
    Left = "LEFT",
    Right = "RIGHT",
    Top = "TOP",
    TopLeft = "TOP_LEFT",
    TopRight = "TOP_RIGHT",
}

export enum ContentfulImageFormat {
    Auto = "AUTO",
    Jpg = "JPG",
    NoChange = "NO_CHANGE",
    Png = "PNG",
    Webp = "WEBP",
}

export enum ContentfulImageLayout {
    Constrained = "CONSTRAINED",
    Fixed = "FIXED",
    FullWidth = "FULL_WIDTH",
}

export enum ContentfulImagePlaceholder {
    Blurred = "BLURRED",
    DominantColor = "DOMINANT_COLOR",
    None = "NONE",
    TracedSvg = "TRACED_SVG",
}

export type ContentfulProjects = ContentfulEntry &
    ContentfulReference &
    Node & {
        __typename?: "ContentfulProjects";
        aboutImages?: Maybe<Array<Maybe<ContentfulAsset>>>;
        childContentfulProjectsConclusionTextNode?: Maybe<ContentfulProjectsConclusionTextNode>;
        childContentfulProjectsContentJsonNode?: Maybe<ContentfulProjectsContentJsonNode>;
        childContentfulProjectsDescriptionTextNode?: Maybe<ContentfulProjectsDescriptionTextNode>;
        childContentfulProjectsLessonTextNode?: Maybe<ContentfulProjectsLessonTextNode>;
        childContentfulProjectsResumeTextNode?: Maybe<ContentfulProjectsResumeTextNode>;
        childContentfulProjectsUsedTextNode?: Maybe<ContentfulProjectsUsedTextNode>;
        children: Array<Node>;
        childrenContentfulProjectsConclusionTextNode?: Maybe<
            Array<Maybe<ContentfulProjectsConclusionTextNode>>
        >;
        childrenContentfulProjectsContentJsonNode?: Maybe<
            Array<Maybe<ContentfulProjectsContentJsonNode>>
        >;
        childrenContentfulProjectsDescriptionTextNode?: Maybe<
            Array<Maybe<ContentfulProjectsDescriptionTextNode>>
        >;
        childrenContentfulProjectsLessonTextNode?: Maybe<
            Array<Maybe<ContentfulProjectsLessonTextNode>>
        >;
        childrenContentfulProjectsResumeTextNode?: Maybe<
            Array<Maybe<ContentfulProjectsResumeTextNode>>
        >;
        childrenContentfulProjectsUsedTextNode?: Maybe<
            Array<Maybe<ContentfulProjectsUsedTextNode>>
        >;
        conclusion?: Maybe<ContentfulProjectsConclusionTextNode>;
        content?: Maybe<ContentfulProjectsContentJsonNode>;
        contentful_id: Scalars["String"];
        core?: Maybe<ContentfulProjectsCore>;
        createdAt?: Maybe<Scalars["Date"]>;
        date?: Maybe<Scalars["Date"]>;
        description?: Maybe<ContentfulProjectsDescriptionTextNode>;
        gatsbyPath?: Maybe<Scalars["String"]>;
        id: Scalars["ID"];
        internal: Internal;
        isFreelanceWork?: Maybe<Scalars["Boolean"]>;
        lesson?: Maybe<ContentfulProjectsLessonTextNode>;
        node_locale: Scalars["String"];
        parent?: Maybe<Node>;
        resume?: Maybe<ContentfulProjectsResumeTextNode>;
        role?: Maybe<Array<Maybe<Scalars["String"]>>>;
        spaceId?: Maybe<Scalars["String"]>;
        sys?: Maybe<ContentfulProjectsSys>;
        team?: Maybe<Array<Maybe<Scalars["String"]>>>;
        teamStack?: Maybe<Array<Maybe<Scalars["String"]>>>;
        thumbnail?: Maybe<ContentfulAsset>;
        timeline?: Maybe<Scalars["String"]>;
        title?: Maybe<Scalars["String"]>;
        updatedAt?: Maybe<Scalars["Date"]>;
        used?: Maybe<ContentfulProjectsUsedTextNode>;
    };

export type ContentfulProjectsCreatedAtArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulProjectsDateArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulProjectsGatsbyPathArgs = {
    filePath?: InputMaybe<Scalars["String"]>;
};

export type ContentfulProjectsUpdatedAtArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulProjectsConnection = {
    __typename?: "ContentfulProjectsConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<ContentfulProjectsEdge>;
    group: Array<ContentfulProjectsGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<ContentfulProjects>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type ContentfulProjectsConnectionDistinctArgs = {
    field: ContentfulProjectsFieldsEnum;
};

export type ContentfulProjectsConnectionGroupArgs = {
    field: ContentfulProjectsFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulProjectsConnectionMaxArgs = {
    field: ContentfulProjectsFieldsEnum;
};

export type ContentfulProjectsConnectionMinArgs = {
    field: ContentfulProjectsFieldsEnum;
};

export type ContentfulProjectsConnectionSumArgs = {
    field: ContentfulProjectsFieldsEnum;
};

export type ContentfulProjectsCore = {
    __typename?: "ContentfulProjectsCore";
    raw?: Maybe<Scalars["String"]>;
    references?: Maybe<Array<Maybe<ContentfulAsset>>>;
};

export type ContentfulProjectsCoreFilterInput = {
    raw?: InputMaybe<StringQueryOperatorInput>;
    references?: InputMaybe<ContentfulAssetFilterListInput>;
};

export type ContentfulProjectsEdge = {
    __typename?: "ContentfulProjectsEdge";
    next?: Maybe<ContentfulProjects>;
    node: ContentfulProjects;
    previous?: Maybe<ContentfulProjects>;
};

export enum ContentfulProjectsFieldsEnum {
    AboutImages = "aboutImages",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesChildren = "aboutImages___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesChildrenChildren = "aboutImages___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesChildrenChildrenChildren = "aboutImages___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesChildrenChildrenId = "aboutImages___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesChildrenId = "aboutImages___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesChildrenInternalContent = "aboutImages___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesChildrenInternalContentDigest = "aboutImages___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesChildrenInternalDescription = "aboutImages___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesChildrenInternalFieldOwners = "aboutImages___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesChildrenInternalIgnoreType = "aboutImages___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesChildrenInternalMediaType = "aboutImages___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesChildrenInternalOwner = "aboutImages___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesChildrenInternalType = "aboutImages___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesChildrenParentChildren = "aboutImages___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesChildrenParentId = "aboutImages___children___parent___id",
    AboutImagesContentfulId = "aboutImages___contentful_id",
    AboutImagesCreatedAt = "aboutImages___createdAt",
    AboutImagesDescription = "aboutImages___description",
    AboutImagesFileContentType = "aboutImages___file___contentType",
    AboutImagesFileDetailsSize = "aboutImages___file___details___size",
    AboutImagesFileFileName = "aboutImages___file___fileName",
    AboutImagesFileUrl = "aboutImages___file___url",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFixedAspectRatio = "aboutImages___fixed___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFixedBase64 = "aboutImages___fixed___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFixedHeight = "aboutImages___fixed___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFixedSrc = "aboutImages___fixed___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFixedSrcSet = "aboutImages___fixed___srcSet",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFixedSrcSetWebp = "aboutImages___fixed___srcSetWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFixedSrcWebp = "aboutImages___fixed___srcWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFixedTracedSvg = "aboutImages___fixed___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFixedWidth = "aboutImages___fixed___width",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFluidAspectRatio = "aboutImages___fluid___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFluidBase64 = "aboutImages___fluid___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFluidSizes = "aboutImages___fluid___sizes",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFluidSrc = "aboutImages___fluid___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFluidSrcSet = "aboutImages___fluid___srcSet",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFluidSrcSetWebp = "aboutImages___fluid___srcSetWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFluidSrcWebp = "aboutImages___fluid___srcWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesFluidTracedSvg = "aboutImages___fluid___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesGatsbyImageData = "aboutImages___gatsbyImageData",
    AboutImagesId = "aboutImages___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesInternalContent = "aboutImages___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesInternalContentDigest = "aboutImages___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesInternalDescription = "aboutImages___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesInternalFieldOwners = "aboutImages___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesInternalIgnoreType = "aboutImages___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesInternalMediaType = "aboutImages___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesInternalOwner = "aboutImages___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesInternalType = "aboutImages___internal___type",
    AboutImagesNodeLocale = "aboutImages___node_locale",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesParentChildren = "aboutImages___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesParentChildrenChildren = "aboutImages___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesParentChildrenId = "aboutImages___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesParentId = "aboutImages___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesParentInternalContent = "aboutImages___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesParentInternalContentDigest = "aboutImages___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesParentInternalDescription = "aboutImages___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesParentInternalFieldOwners = "aboutImages___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesParentInternalIgnoreType = "aboutImages___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesParentInternalMediaType = "aboutImages___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesParentInternalOwner = "aboutImages___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesParentInternalType = "aboutImages___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesParentParentChildren = "aboutImages___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesParentParentId = "aboutImages___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesResizeAspectRatio = "aboutImages___resize___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesResizeBase64 = "aboutImages___resize___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesResizeHeight = "aboutImages___resize___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesResizeSrc = "aboutImages___resize___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesResizeTracedSvg = "aboutImages___resize___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    AboutImagesResizeWidth = "aboutImages___resize___width",
    AboutImagesSpaceId = "aboutImages___spaceId",
    AboutImagesSysRevision = "aboutImages___sys___revision",
    AboutImagesSysType = "aboutImages___sys___type",
    AboutImagesTitle = "aboutImages___title",
    AboutImagesUpdatedAt = "aboutImages___updatedAt",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeChildren = "childContentfulProjectsConclusionTextNode___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeChildrenChildren = "childContentfulProjectsConclusionTextNode___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeChildrenChildrenChildren = "childContentfulProjectsConclusionTextNode___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeChildrenChildrenId = "childContentfulProjectsConclusionTextNode___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeChildrenId = "childContentfulProjectsConclusionTextNode___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeChildrenInternalContent = "childContentfulProjectsConclusionTextNode___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeChildrenInternalContentDigest = "childContentfulProjectsConclusionTextNode___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeChildrenInternalDescription = "childContentfulProjectsConclusionTextNode___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeChildrenInternalFieldOwners = "childContentfulProjectsConclusionTextNode___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeChildrenInternalIgnoreType = "childContentfulProjectsConclusionTextNode___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeChildrenInternalMediaType = "childContentfulProjectsConclusionTextNode___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeChildrenInternalOwner = "childContentfulProjectsConclusionTextNode___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeChildrenInternalType = "childContentfulProjectsConclusionTextNode___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeChildrenParentChildren = "childContentfulProjectsConclusionTextNode___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeChildrenParentId = "childContentfulProjectsConclusionTextNode___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeConclusion = "childContentfulProjectsConclusionTextNode___conclusion",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeId = "childContentfulProjectsConclusionTextNode___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeInternalContent = "childContentfulProjectsConclusionTextNode___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeInternalContentDigest = "childContentfulProjectsConclusionTextNode___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeInternalDescription = "childContentfulProjectsConclusionTextNode___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeInternalFieldOwners = "childContentfulProjectsConclusionTextNode___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeInternalIgnoreType = "childContentfulProjectsConclusionTextNode___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeInternalMediaType = "childContentfulProjectsConclusionTextNode___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeInternalOwner = "childContentfulProjectsConclusionTextNode___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeInternalType = "childContentfulProjectsConclusionTextNode___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeParentChildren = "childContentfulProjectsConclusionTextNode___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeParentChildrenChildren = "childContentfulProjectsConclusionTextNode___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeParentChildrenId = "childContentfulProjectsConclusionTextNode___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeParentId = "childContentfulProjectsConclusionTextNode___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeParentInternalContent = "childContentfulProjectsConclusionTextNode___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeParentInternalContentDigest = "childContentfulProjectsConclusionTextNode___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeParentInternalDescription = "childContentfulProjectsConclusionTextNode___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeParentInternalFieldOwners = "childContentfulProjectsConclusionTextNode___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeParentInternalIgnoreType = "childContentfulProjectsConclusionTextNode___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeParentInternalMediaType = "childContentfulProjectsConclusionTextNode___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeParentInternalOwner = "childContentfulProjectsConclusionTextNode___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeParentInternalType = "childContentfulProjectsConclusionTextNode___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeParentParentChildren = "childContentfulProjectsConclusionTextNode___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeParentParentId = "childContentfulProjectsConclusionTextNode___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsConclusionTextNodeSysType = "childContentfulProjectsConclusionTextNode___sys___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeAppLink = "childContentfulProjectsContentJsonNode___app_link",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeChildren = "childContentfulProjectsContentJsonNode___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeChildrenChildren = "childContentfulProjectsContentJsonNode___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeChildrenChildrenChildren = "childContentfulProjectsContentJsonNode___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeChildrenChildrenId = "childContentfulProjectsContentJsonNode___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeChildrenId = "childContentfulProjectsContentJsonNode___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeChildrenInternalContent = "childContentfulProjectsContentJsonNode___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeChildrenInternalContentDigest = "childContentfulProjectsContentJsonNode___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeChildrenInternalDescription = "childContentfulProjectsContentJsonNode___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeChildrenInternalFieldOwners = "childContentfulProjectsContentJsonNode___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeChildrenInternalIgnoreType = "childContentfulProjectsContentJsonNode___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeChildrenInternalMediaType = "childContentfulProjectsContentJsonNode___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeChildrenInternalOwner = "childContentfulProjectsContentJsonNode___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeChildrenInternalType = "childContentfulProjectsContentJsonNode___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeChildrenParentChildren = "childContentfulProjectsContentJsonNode___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeChildrenParentId = "childContentfulProjectsContentJsonNode___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeGithubLink = "childContentfulProjectsContentJsonNode___github_link",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeId = "childContentfulProjectsContentJsonNode___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeInternalContent = "childContentfulProjectsContentJsonNode___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeInternalContentDigest = "childContentfulProjectsContentJsonNode___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeInternalDescription = "childContentfulProjectsContentJsonNode___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeInternalFieldOwners = "childContentfulProjectsContentJsonNode___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeInternalIgnoreType = "childContentfulProjectsContentJsonNode___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeInternalMediaType = "childContentfulProjectsContentJsonNode___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeInternalOwner = "childContentfulProjectsContentJsonNode___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeInternalType = "childContentfulProjectsContentJsonNode___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeParentChildren = "childContentfulProjectsContentJsonNode___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeParentChildrenChildren = "childContentfulProjectsContentJsonNode___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeParentChildrenId = "childContentfulProjectsContentJsonNode___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeParentId = "childContentfulProjectsContentJsonNode___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeParentInternalContent = "childContentfulProjectsContentJsonNode___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeParentInternalContentDigest = "childContentfulProjectsContentJsonNode___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeParentInternalDescription = "childContentfulProjectsContentJsonNode___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeParentInternalFieldOwners = "childContentfulProjectsContentJsonNode___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeParentInternalIgnoreType = "childContentfulProjectsContentJsonNode___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeParentInternalMediaType = "childContentfulProjectsContentJsonNode___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeParentInternalOwner = "childContentfulProjectsContentJsonNode___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeParentInternalType = "childContentfulProjectsContentJsonNode___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeParentParentChildren = "childContentfulProjectsContentJsonNode___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeParentParentId = "childContentfulProjectsContentJsonNode___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeStacks = "childContentfulProjectsContentJsonNode___stacks",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeSysType = "childContentfulProjectsContentJsonNode___sys___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsContentJsonNodeTags = "childContentfulProjectsContentJsonNode___tags",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeChildren = "childContentfulProjectsDescriptionTextNode___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeChildrenChildren = "childContentfulProjectsDescriptionTextNode___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeChildrenChildrenChildren = "childContentfulProjectsDescriptionTextNode___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeChildrenChildrenId = "childContentfulProjectsDescriptionTextNode___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeChildrenId = "childContentfulProjectsDescriptionTextNode___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeChildrenInternalContent = "childContentfulProjectsDescriptionTextNode___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeChildrenInternalContentDigest = "childContentfulProjectsDescriptionTextNode___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeChildrenInternalDescription = "childContentfulProjectsDescriptionTextNode___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeChildrenInternalFieldOwners = "childContentfulProjectsDescriptionTextNode___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeChildrenInternalIgnoreType = "childContentfulProjectsDescriptionTextNode___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeChildrenInternalMediaType = "childContentfulProjectsDescriptionTextNode___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeChildrenInternalOwner = "childContentfulProjectsDescriptionTextNode___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeChildrenInternalType = "childContentfulProjectsDescriptionTextNode___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeChildrenParentChildren = "childContentfulProjectsDescriptionTextNode___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeChildrenParentId = "childContentfulProjectsDescriptionTextNode___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeDescription = "childContentfulProjectsDescriptionTextNode___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeId = "childContentfulProjectsDescriptionTextNode___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeInternalContent = "childContentfulProjectsDescriptionTextNode___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeInternalContentDigest = "childContentfulProjectsDescriptionTextNode___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeInternalDescription = "childContentfulProjectsDescriptionTextNode___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeInternalFieldOwners = "childContentfulProjectsDescriptionTextNode___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeInternalIgnoreType = "childContentfulProjectsDescriptionTextNode___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeInternalMediaType = "childContentfulProjectsDescriptionTextNode___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeInternalOwner = "childContentfulProjectsDescriptionTextNode___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeInternalType = "childContentfulProjectsDescriptionTextNode___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeParentChildren = "childContentfulProjectsDescriptionTextNode___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeParentChildrenChildren = "childContentfulProjectsDescriptionTextNode___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeParentChildrenId = "childContentfulProjectsDescriptionTextNode___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeParentId = "childContentfulProjectsDescriptionTextNode___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeParentInternalContent = "childContentfulProjectsDescriptionTextNode___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeParentInternalContentDigest = "childContentfulProjectsDescriptionTextNode___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeParentInternalDescription = "childContentfulProjectsDescriptionTextNode___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeParentInternalFieldOwners = "childContentfulProjectsDescriptionTextNode___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeParentInternalIgnoreType = "childContentfulProjectsDescriptionTextNode___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeParentInternalMediaType = "childContentfulProjectsDescriptionTextNode___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeParentInternalOwner = "childContentfulProjectsDescriptionTextNode___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeParentInternalType = "childContentfulProjectsDescriptionTextNode___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeParentParentChildren = "childContentfulProjectsDescriptionTextNode___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeParentParentId = "childContentfulProjectsDescriptionTextNode___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsDescriptionTextNodeSysType = "childContentfulProjectsDescriptionTextNode___sys___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeChildren = "childContentfulProjectsLessonTextNode___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeChildrenChildren = "childContentfulProjectsLessonTextNode___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeChildrenChildrenChildren = "childContentfulProjectsLessonTextNode___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeChildrenChildrenId = "childContentfulProjectsLessonTextNode___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeChildrenId = "childContentfulProjectsLessonTextNode___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeChildrenInternalContent = "childContentfulProjectsLessonTextNode___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeChildrenInternalContentDigest = "childContentfulProjectsLessonTextNode___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeChildrenInternalDescription = "childContentfulProjectsLessonTextNode___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeChildrenInternalFieldOwners = "childContentfulProjectsLessonTextNode___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeChildrenInternalIgnoreType = "childContentfulProjectsLessonTextNode___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeChildrenInternalMediaType = "childContentfulProjectsLessonTextNode___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeChildrenInternalOwner = "childContentfulProjectsLessonTextNode___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeChildrenInternalType = "childContentfulProjectsLessonTextNode___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeChildrenParentChildren = "childContentfulProjectsLessonTextNode___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeChildrenParentId = "childContentfulProjectsLessonTextNode___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeId = "childContentfulProjectsLessonTextNode___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeInternalContent = "childContentfulProjectsLessonTextNode___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeInternalContentDigest = "childContentfulProjectsLessonTextNode___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeInternalDescription = "childContentfulProjectsLessonTextNode___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeInternalFieldOwners = "childContentfulProjectsLessonTextNode___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeInternalIgnoreType = "childContentfulProjectsLessonTextNode___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeInternalMediaType = "childContentfulProjectsLessonTextNode___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeInternalOwner = "childContentfulProjectsLessonTextNode___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeInternalType = "childContentfulProjectsLessonTextNode___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeLesson = "childContentfulProjectsLessonTextNode___lesson",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeParentChildren = "childContentfulProjectsLessonTextNode___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeParentChildrenChildren = "childContentfulProjectsLessonTextNode___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeParentChildrenId = "childContentfulProjectsLessonTextNode___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeParentId = "childContentfulProjectsLessonTextNode___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeParentInternalContent = "childContentfulProjectsLessonTextNode___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeParentInternalContentDigest = "childContentfulProjectsLessonTextNode___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeParentInternalDescription = "childContentfulProjectsLessonTextNode___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeParentInternalFieldOwners = "childContentfulProjectsLessonTextNode___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeParentInternalIgnoreType = "childContentfulProjectsLessonTextNode___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeParentInternalMediaType = "childContentfulProjectsLessonTextNode___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeParentInternalOwner = "childContentfulProjectsLessonTextNode___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeParentInternalType = "childContentfulProjectsLessonTextNode___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeParentParentChildren = "childContentfulProjectsLessonTextNode___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeParentParentId = "childContentfulProjectsLessonTextNode___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsLessonTextNodeSysType = "childContentfulProjectsLessonTextNode___sys___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeChildren = "childContentfulProjectsResumeTextNode___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeChildrenChildren = "childContentfulProjectsResumeTextNode___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeChildrenChildrenChildren = "childContentfulProjectsResumeTextNode___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeChildrenChildrenId = "childContentfulProjectsResumeTextNode___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeChildrenId = "childContentfulProjectsResumeTextNode___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeChildrenInternalContent = "childContentfulProjectsResumeTextNode___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeChildrenInternalContentDigest = "childContentfulProjectsResumeTextNode___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeChildrenInternalDescription = "childContentfulProjectsResumeTextNode___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeChildrenInternalFieldOwners = "childContentfulProjectsResumeTextNode___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeChildrenInternalIgnoreType = "childContentfulProjectsResumeTextNode___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeChildrenInternalMediaType = "childContentfulProjectsResumeTextNode___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeChildrenInternalOwner = "childContentfulProjectsResumeTextNode___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeChildrenInternalType = "childContentfulProjectsResumeTextNode___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeChildrenParentChildren = "childContentfulProjectsResumeTextNode___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeChildrenParentId = "childContentfulProjectsResumeTextNode___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeId = "childContentfulProjectsResumeTextNode___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeInternalContent = "childContentfulProjectsResumeTextNode___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeInternalContentDigest = "childContentfulProjectsResumeTextNode___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeInternalDescription = "childContentfulProjectsResumeTextNode___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeInternalFieldOwners = "childContentfulProjectsResumeTextNode___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeInternalIgnoreType = "childContentfulProjectsResumeTextNode___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeInternalMediaType = "childContentfulProjectsResumeTextNode___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeInternalOwner = "childContentfulProjectsResumeTextNode___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeInternalType = "childContentfulProjectsResumeTextNode___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeParentChildren = "childContentfulProjectsResumeTextNode___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeParentChildrenChildren = "childContentfulProjectsResumeTextNode___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeParentChildrenId = "childContentfulProjectsResumeTextNode___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeParentId = "childContentfulProjectsResumeTextNode___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeParentInternalContent = "childContentfulProjectsResumeTextNode___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeParentInternalContentDigest = "childContentfulProjectsResumeTextNode___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeParentInternalDescription = "childContentfulProjectsResumeTextNode___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeParentInternalFieldOwners = "childContentfulProjectsResumeTextNode___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeParentInternalIgnoreType = "childContentfulProjectsResumeTextNode___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeParentInternalMediaType = "childContentfulProjectsResumeTextNode___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeParentInternalOwner = "childContentfulProjectsResumeTextNode___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeParentInternalType = "childContentfulProjectsResumeTextNode___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeParentParentChildren = "childContentfulProjectsResumeTextNode___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeParentParentId = "childContentfulProjectsResumeTextNode___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeResume = "childContentfulProjectsResumeTextNode___resume",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsResumeTextNodeSysType = "childContentfulProjectsResumeTextNode___sys___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeChildren = "childContentfulProjectsUsedTextNode___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeChildrenChildren = "childContentfulProjectsUsedTextNode___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeChildrenChildrenChildren = "childContentfulProjectsUsedTextNode___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeChildrenChildrenId = "childContentfulProjectsUsedTextNode___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeChildrenId = "childContentfulProjectsUsedTextNode___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeChildrenInternalContent = "childContentfulProjectsUsedTextNode___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeChildrenInternalContentDigest = "childContentfulProjectsUsedTextNode___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeChildrenInternalDescription = "childContentfulProjectsUsedTextNode___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeChildrenInternalFieldOwners = "childContentfulProjectsUsedTextNode___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeChildrenInternalIgnoreType = "childContentfulProjectsUsedTextNode___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeChildrenInternalMediaType = "childContentfulProjectsUsedTextNode___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeChildrenInternalOwner = "childContentfulProjectsUsedTextNode___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeChildrenInternalType = "childContentfulProjectsUsedTextNode___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeChildrenParentChildren = "childContentfulProjectsUsedTextNode___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeChildrenParentId = "childContentfulProjectsUsedTextNode___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeId = "childContentfulProjectsUsedTextNode___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeInternalContent = "childContentfulProjectsUsedTextNode___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeInternalContentDigest = "childContentfulProjectsUsedTextNode___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeInternalDescription = "childContentfulProjectsUsedTextNode___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeInternalFieldOwners = "childContentfulProjectsUsedTextNode___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeInternalIgnoreType = "childContentfulProjectsUsedTextNode___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeInternalMediaType = "childContentfulProjectsUsedTextNode___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeInternalOwner = "childContentfulProjectsUsedTextNode___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeInternalType = "childContentfulProjectsUsedTextNode___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeParentChildren = "childContentfulProjectsUsedTextNode___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeParentChildrenChildren = "childContentfulProjectsUsedTextNode___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeParentChildrenId = "childContentfulProjectsUsedTextNode___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeParentId = "childContentfulProjectsUsedTextNode___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeParentInternalContent = "childContentfulProjectsUsedTextNode___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeParentInternalContentDigest = "childContentfulProjectsUsedTextNode___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeParentInternalDescription = "childContentfulProjectsUsedTextNode___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeParentInternalFieldOwners = "childContentfulProjectsUsedTextNode___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeParentInternalIgnoreType = "childContentfulProjectsUsedTextNode___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeParentInternalMediaType = "childContentfulProjectsUsedTextNode___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeParentInternalOwner = "childContentfulProjectsUsedTextNode___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeParentInternalType = "childContentfulProjectsUsedTextNode___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeParentParentChildren = "childContentfulProjectsUsedTextNode___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeParentParentId = "childContentfulProjectsUsedTextNode___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeSysType = "childContentfulProjectsUsedTextNode___sys___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildContentfulProjectsUsedTextNodeUsed = "childContentfulProjectsUsedTextNode___used",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    Children = "children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNode = "childrenContentfulProjectsConclusionTextNode",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeChildren = "childrenContentfulProjectsConclusionTextNode___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeChildrenChildren = "childrenContentfulProjectsConclusionTextNode___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeChildrenChildrenChildren = "childrenContentfulProjectsConclusionTextNode___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeChildrenChildrenId = "childrenContentfulProjectsConclusionTextNode___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeChildrenId = "childrenContentfulProjectsConclusionTextNode___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeChildrenInternalContent = "childrenContentfulProjectsConclusionTextNode___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeChildrenInternalContentDigest = "childrenContentfulProjectsConclusionTextNode___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeChildrenInternalDescription = "childrenContentfulProjectsConclusionTextNode___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeChildrenInternalFieldOwners = "childrenContentfulProjectsConclusionTextNode___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeChildrenInternalIgnoreType = "childrenContentfulProjectsConclusionTextNode___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeChildrenInternalMediaType = "childrenContentfulProjectsConclusionTextNode___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeChildrenInternalOwner = "childrenContentfulProjectsConclusionTextNode___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeChildrenInternalType = "childrenContentfulProjectsConclusionTextNode___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeChildrenParentChildren = "childrenContentfulProjectsConclusionTextNode___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeChildrenParentId = "childrenContentfulProjectsConclusionTextNode___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeConclusion = "childrenContentfulProjectsConclusionTextNode___conclusion",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeId = "childrenContentfulProjectsConclusionTextNode___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeInternalContent = "childrenContentfulProjectsConclusionTextNode___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeInternalContentDigest = "childrenContentfulProjectsConclusionTextNode___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeInternalDescription = "childrenContentfulProjectsConclusionTextNode___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeInternalFieldOwners = "childrenContentfulProjectsConclusionTextNode___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeInternalIgnoreType = "childrenContentfulProjectsConclusionTextNode___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeInternalMediaType = "childrenContentfulProjectsConclusionTextNode___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeInternalOwner = "childrenContentfulProjectsConclusionTextNode___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeInternalType = "childrenContentfulProjectsConclusionTextNode___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeParentChildren = "childrenContentfulProjectsConclusionTextNode___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeParentChildrenChildren = "childrenContentfulProjectsConclusionTextNode___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeParentChildrenId = "childrenContentfulProjectsConclusionTextNode___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeParentId = "childrenContentfulProjectsConclusionTextNode___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeParentInternalContent = "childrenContentfulProjectsConclusionTextNode___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeParentInternalContentDigest = "childrenContentfulProjectsConclusionTextNode___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeParentInternalDescription = "childrenContentfulProjectsConclusionTextNode___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeParentInternalFieldOwners = "childrenContentfulProjectsConclusionTextNode___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeParentInternalIgnoreType = "childrenContentfulProjectsConclusionTextNode___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeParentInternalMediaType = "childrenContentfulProjectsConclusionTextNode___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeParentInternalOwner = "childrenContentfulProjectsConclusionTextNode___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeParentInternalType = "childrenContentfulProjectsConclusionTextNode___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeParentParentChildren = "childrenContentfulProjectsConclusionTextNode___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeParentParentId = "childrenContentfulProjectsConclusionTextNode___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsConclusionTextNodeSysType = "childrenContentfulProjectsConclusionTextNode___sys___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNode = "childrenContentfulProjectsContentJsonNode",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeAppLink = "childrenContentfulProjectsContentJsonNode___app_link",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeChildren = "childrenContentfulProjectsContentJsonNode___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeChildrenChildren = "childrenContentfulProjectsContentJsonNode___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeChildrenChildrenChildren = "childrenContentfulProjectsContentJsonNode___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeChildrenChildrenId = "childrenContentfulProjectsContentJsonNode___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeChildrenId = "childrenContentfulProjectsContentJsonNode___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeChildrenInternalContent = "childrenContentfulProjectsContentJsonNode___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeChildrenInternalContentDigest = "childrenContentfulProjectsContentJsonNode___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeChildrenInternalDescription = "childrenContentfulProjectsContentJsonNode___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeChildrenInternalFieldOwners = "childrenContentfulProjectsContentJsonNode___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeChildrenInternalIgnoreType = "childrenContentfulProjectsContentJsonNode___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeChildrenInternalMediaType = "childrenContentfulProjectsContentJsonNode___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeChildrenInternalOwner = "childrenContentfulProjectsContentJsonNode___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeChildrenInternalType = "childrenContentfulProjectsContentJsonNode___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeChildrenParentChildren = "childrenContentfulProjectsContentJsonNode___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeChildrenParentId = "childrenContentfulProjectsContentJsonNode___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeGithubLink = "childrenContentfulProjectsContentJsonNode___github_link",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeId = "childrenContentfulProjectsContentJsonNode___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeInternalContent = "childrenContentfulProjectsContentJsonNode___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeInternalContentDigest = "childrenContentfulProjectsContentJsonNode___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeInternalDescription = "childrenContentfulProjectsContentJsonNode___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeInternalFieldOwners = "childrenContentfulProjectsContentJsonNode___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeInternalIgnoreType = "childrenContentfulProjectsContentJsonNode___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeInternalMediaType = "childrenContentfulProjectsContentJsonNode___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeInternalOwner = "childrenContentfulProjectsContentJsonNode___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeInternalType = "childrenContentfulProjectsContentJsonNode___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeParentChildren = "childrenContentfulProjectsContentJsonNode___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeParentChildrenChildren = "childrenContentfulProjectsContentJsonNode___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeParentChildrenId = "childrenContentfulProjectsContentJsonNode___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeParentId = "childrenContentfulProjectsContentJsonNode___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeParentInternalContent = "childrenContentfulProjectsContentJsonNode___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeParentInternalContentDigest = "childrenContentfulProjectsContentJsonNode___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeParentInternalDescription = "childrenContentfulProjectsContentJsonNode___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeParentInternalFieldOwners = "childrenContentfulProjectsContentJsonNode___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeParentInternalIgnoreType = "childrenContentfulProjectsContentJsonNode___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeParentInternalMediaType = "childrenContentfulProjectsContentJsonNode___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeParentInternalOwner = "childrenContentfulProjectsContentJsonNode___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeParentInternalType = "childrenContentfulProjectsContentJsonNode___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeParentParentChildren = "childrenContentfulProjectsContentJsonNode___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeParentParentId = "childrenContentfulProjectsContentJsonNode___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeStacks = "childrenContentfulProjectsContentJsonNode___stacks",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeSysType = "childrenContentfulProjectsContentJsonNode___sys___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsContentJsonNodeTags = "childrenContentfulProjectsContentJsonNode___tags",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNode = "childrenContentfulProjectsDescriptionTextNode",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeChildren = "childrenContentfulProjectsDescriptionTextNode___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeChildrenChildren = "childrenContentfulProjectsDescriptionTextNode___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeChildrenChildrenChildren = "childrenContentfulProjectsDescriptionTextNode___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeChildrenChildrenId = "childrenContentfulProjectsDescriptionTextNode___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeChildrenId = "childrenContentfulProjectsDescriptionTextNode___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeChildrenInternalContent = "childrenContentfulProjectsDescriptionTextNode___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeChildrenInternalContentDigest = "childrenContentfulProjectsDescriptionTextNode___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeChildrenInternalDescription = "childrenContentfulProjectsDescriptionTextNode___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeChildrenInternalFieldOwners = "childrenContentfulProjectsDescriptionTextNode___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeChildrenInternalIgnoreType = "childrenContentfulProjectsDescriptionTextNode___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeChildrenInternalMediaType = "childrenContentfulProjectsDescriptionTextNode___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeChildrenInternalOwner = "childrenContentfulProjectsDescriptionTextNode___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeChildrenInternalType = "childrenContentfulProjectsDescriptionTextNode___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeChildrenParentChildren = "childrenContentfulProjectsDescriptionTextNode___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeChildrenParentId = "childrenContentfulProjectsDescriptionTextNode___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeDescription = "childrenContentfulProjectsDescriptionTextNode___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeId = "childrenContentfulProjectsDescriptionTextNode___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeInternalContent = "childrenContentfulProjectsDescriptionTextNode___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeInternalContentDigest = "childrenContentfulProjectsDescriptionTextNode___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeInternalDescription = "childrenContentfulProjectsDescriptionTextNode___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeInternalFieldOwners = "childrenContentfulProjectsDescriptionTextNode___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeInternalIgnoreType = "childrenContentfulProjectsDescriptionTextNode___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeInternalMediaType = "childrenContentfulProjectsDescriptionTextNode___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeInternalOwner = "childrenContentfulProjectsDescriptionTextNode___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeInternalType = "childrenContentfulProjectsDescriptionTextNode___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeParentChildren = "childrenContentfulProjectsDescriptionTextNode___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeParentChildrenChildren = "childrenContentfulProjectsDescriptionTextNode___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeParentChildrenId = "childrenContentfulProjectsDescriptionTextNode___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeParentId = "childrenContentfulProjectsDescriptionTextNode___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeParentInternalContent = "childrenContentfulProjectsDescriptionTextNode___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeParentInternalContentDigest = "childrenContentfulProjectsDescriptionTextNode___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeParentInternalDescription = "childrenContentfulProjectsDescriptionTextNode___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeParentInternalFieldOwners = "childrenContentfulProjectsDescriptionTextNode___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeParentInternalIgnoreType = "childrenContentfulProjectsDescriptionTextNode___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeParentInternalMediaType = "childrenContentfulProjectsDescriptionTextNode___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeParentInternalOwner = "childrenContentfulProjectsDescriptionTextNode___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeParentInternalType = "childrenContentfulProjectsDescriptionTextNode___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeParentParentChildren = "childrenContentfulProjectsDescriptionTextNode___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeParentParentId = "childrenContentfulProjectsDescriptionTextNode___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsDescriptionTextNodeSysType = "childrenContentfulProjectsDescriptionTextNode___sys___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNode = "childrenContentfulProjectsLessonTextNode",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeChildren = "childrenContentfulProjectsLessonTextNode___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeChildrenChildren = "childrenContentfulProjectsLessonTextNode___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeChildrenChildrenChildren = "childrenContentfulProjectsLessonTextNode___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeChildrenChildrenId = "childrenContentfulProjectsLessonTextNode___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeChildrenId = "childrenContentfulProjectsLessonTextNode___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeChildrenInternalContent = "childrenContentfulProjectsLessonTextNode___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeChildrenInternalContentDigest = "childrenContentfulProjectsLessonTextNode___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeChildrenInternalDescription = "childrenContentfulProjectsLessonTextNode___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeChildrenInternalFieldOwners = "childrenContentfulProjectsLessonTextNode___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeChildrenInternalIgnoreType = "childrenContentfulProjectsLessonTextNode___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeChildrenInternalMediaType = "childrenContentfulProjectsLessonTextNode___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeChildrenInternalOwner = "childrenContentfulProjectsLessonTextNode___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeChildrenInternalType = "childrenContentfulProjectsLessonTextNode___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeChildrenParentChildren = "childrenContentfulProjectsLessonTextNode___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeChildrenParentId = "childrenContentfulProjectsLessonTextNode___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeId = "childrenContentfulProjectsLessonTextNode___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeInternalContent = "childrenContentfulProjectsLessonTextNode___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeInternalContentDigest = "childrenContentfulProjectsLessonTextNode___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeInternalDescription = "childrenContentfulProjectsLessonTextNode___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeInternalFieldOwners = "childrenContentfulProjectsLessonTextNode___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeInternalIgnoreType = "childrenContentfulProjectsLessonTextNode___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeInternalMediaType = "childrenContentfulProjectsLessonTextNode___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeInternalOwner = "childrenContentfulProjectsLessonTextNode___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeInternalType = "childrenContentfulProjectsLessonTextNode___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeLesson = "childrenContentfulProjectsLessonTextNode___lesson",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeParentChildren = "childrenContentfulProjectsLessonTextNode___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeParentChildrenChildren = "childrenContentfulProjectsLessonTextNode___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeParentChildrenId = "childrenContentfulProjectsLessonTextNode___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeParentId = "childrenContentfulProjectsLessonTextNode___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeParentInternalContent = "childrenContentfulProjectsLessonTextNode___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeParentInternalContentDigest = "childrenContentfulProjectsLessonTextNode___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeParentInternalDescription = "childrenContentfulProjectsLessonTextNode___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeParentInternalFieldOwners = "childrenContentfulProjectsLessonTextNode___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeParentInternalIgnoreType = "childrenContentfulProjectsLessonTextNode___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeParentInternalMediaType = "childrenContentfulProjectsLessonTextNode___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeParentInternalOwner = "childrenContentfulProjectsLessonTextNode___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeParentInternalType = "childrenContentfulProjectsLessonTextNode___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeParentParentChildren = "childrenContentfulProjectsLessonTextNode___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeParentParentId = "childrenContentfulProjectsLessonTextNode___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsLessonTextNodeSysType = "childrenContentfulProjectsLessonTextNode___sys___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNode = "childrenContentfulProjectsResumeTextNode",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeChildren = "childrenContentfulProjectsResumeTextNode___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeChildrenChildren = "childrenContentfulProjectsResumeTextNode___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeChildrenChildrenChildren = "childrenContentfulProjectsResumeTextNode___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeChildrenChildrenId = "childrenContentfulProjectsResumeTextNode___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeChildrenId = "childrenContentfulProjectsResumeTextNode___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeChildrenInternalContent = "childrenContentfulProjectsResumeTextNode___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeChildrenInternalContentDigest = "childrenContentfulProjectsResumeTextNode___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeChildrenInternalDescription = "childrenContentfulProjectsResumeTextNode___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeChildrenInternalFieldOwners = "childrenContentfulProjectsResumeTextNode___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeChildrenInternalIgnoreType = "childrenContentfulProjectsResumeTextNode___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeChildrenInternalMediaType = "childrenContentfulProjectsResumeTextNode___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeChildrenInternalOwner = "childrenContentfulProjectsResumeTextNode___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeChildrenInternalType = "childrenContentfulProjectsResumeTextNode___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeChildrenParentChildren = "childrenContentfulProjectsResumeTextNode___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeChildrenParentId = "childrenContentfulProjectsResumeTextNode___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeId = "childrenContentfulProjectsResumeTextNode___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeInternalContent = "childrenContentfulProjectsResumeTextNode___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeInternalContentDigest = "childrenContentfulProjectsResumeTextNode___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeInternalDescription = "childrenContentfulProjectsResumeTextNode___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeInternalFieldOwners = "childrenContentfulProjectsResumeTextNode___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeInternalIgnoreType = "childrenContentfulProjectsResumeTextNode___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeInternalMediaType = "childrenContentfulProjectsResumeTextNode___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeInternalOwner = "childrenContentfulProjectsResumeTextNode___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeInternalType = "childrenContentfulProjectsResumeTextNode___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeParentChildren = "childrenContentfulProjectsResumeTextNode___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeParentChildrenChildren = "childrenContentfulProjectsResumeTextNode___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeParentChildrenId = "childrenContentfulProjectsResumeTextNode___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeParentId = "childrenContentfulProjectsResumeTextNode___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeParentInternalContent = "childrenContentfulProjectsResumeTextNode___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeParentInternalContentDigest = "childrenContentfulProjectsResumeTextNode___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeParentInternalDescription = "childrenContentfulProjectsResumeTextNode___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeParentInternalFieldOwners = "childrenContentfulProjectsResumeTextNode___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeParentInternalIgnoreType = "childrenContentfulProjectsResumeTextNode___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeParentInternalMediaType = "childrenContentfulProjectsResumeTextNode___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeParentInternalOwner = "childrenContentfulProjectsResumeTextNode___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeParentInternalType = "childrenContentfulProjectsResumeTextNode___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeParentParentChildren = "childrenContentfulProjectsResumeTextNode___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeParentParentId = "childrenContentfulProjectsResumeTextNode___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeResume = "childrenContentfulProjectsResumeTextNode___resume",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsResumeTextNodeSysType = "childrenContentfulProjectsResumeTextNode___sys___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNode = "childrenContentfulProjectsUsedTextNode",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeChildren = "childrenContentfulProjectsUsedTextNode___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeChildrenChildren = "childrenContentfulProjectsUsedTextNode___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeChildrenChildrenChildren = "childrenContentfulProjectsUsedTextNode___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeChildrenChildrenId = "childrenContentfulProjectsUsedTextNode___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeChildrenId = "childrenContentfulProjectsUsedTextNode___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeChildrenInternalContent = "childrenContentfulProjectsUsedTextNode___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeChildrenInternalContentDigest = "childrenContentfulProjectsUsedTextNode___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeChildrenInternalDescription = "childrenContentfulProjectsUsedTextNode___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeChildrenInternalFieldOwners = "childrenContentfulProjectsUsedTextNode___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeChildrenInternalIgnoreType = "childrenContentfulProjectsUsedTextNode___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeChildrenInternalMediaType = "childrenContentfulProjectsUsedTextNode___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeChildrenInternalOwner = "childrenContentfulProjectsUsedTextNode___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeChildrenInternalType = "childrenContentfulProjectsUsedTextNode___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeChildrenParentChildren = "childrenContentfulProjectsUsedTextNode___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeChildrenParentId = "childrenContentfulProjectsUsedTextNode___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeId = "childrenContentfulProjectsUsedTextNode___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeInternalContent = "childrenContentfulProjectsUsedTextNode___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeInternalContentDigest = "childrenContentfulProjectsUsedTextNode___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeInternalDescription = "childrenContentfulProjectsUsedTextNode___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeInternalFieldOwners = "childrenContentfulProjectsUsedTextNode___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeInternalIgnoreType = "childrenContentfulProjectsUsedTextNode___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeInternalMediaType = "childrenContentfulProjectsUsedTextNode___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeInternalOwner = "childrenContentfulProjectsUsedTextNode___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeInternalType = "childrenContentfulProjectsUsedTextNode___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeParentChildren = "childrenContentfulProjectsUsedTextNode___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeParentChildrenChildren = "childrenContentfulProjectsUsedTextNode___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeParentChildrenId = "childrenContentfulProjectsUsedTextNode___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeParentId = "childrenContentfulProjectsUsedTextNode___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeParentInternalContent = "childrenContentfulProjectsUsedTextNode___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeParentInternalContentDigest = "childrenContentfulProjectsUsedTextNode___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeParentInternalDescription = "childrenContentfulProjectsUsedTextNode___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeParentInternalFieldOwners = "childrenContentfulProjectsUsedTextNode___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeParentInternalIgnoreType = "childrenContentfulProjectsUsedTextNode___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeParentInternalMediaType = "childrenContentfulProjectsUsedTextNode___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeParentInternalOwner = "childrenContentfulProjectsUsedTextNode___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeParentInternalType = "childrenContentfulProjectsUsedTextNode___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeParentParentChildren = "childrenContentfulProjectsUsedTextNode___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeParentParentId = "childrenContentfulProjectsUsedTextNode___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeSysType = "childrenContentfulProjectsUsedTextNode___sys___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenContentfulProjectsUsedTextNodeUsed = "childrenContentfulProjectsUsedTextNode___used",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildren = "children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenChildren = "children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenChildrenId = "children___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenId = "children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalContent = "children___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalType = "children___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenParentChildren = "children___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenParentId = "children___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenId = "children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalContent = "children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalDescription = "children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalMediaType = "children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalOwner = "children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalType = "children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentChildren = "children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentChildrenChildren = "children___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentChildrenId = "children___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentId = "children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalContent = "children___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalDescription = "children___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalType = "children___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentParentChildren = "children___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentParentId = "children___parent___parent___id",
    ConclusionChildren = "conclusion___children",
    ConclusionChildrenChildren = "conclusion___children___children",
    ConclusionChildrenChildrenChildren = "conclusion___children___children___children",
    ConclusionChildrenChildrenId = "conclusion___children___children___id",
    ConclusionChildrenId = "conclusion___children___id",
    ConclusionChildrenInternalContent = "conclusion___children___internal___content",
    ConclusionChildrenInternalContentDigest = "conclusion___children___internal___contentDigest",
    ConclusionChildrenInternalDescription = "conclusion___children___internal___description",
    ConclusionChildrenInternalFieldOwners = "conclusion___children___internal___fieldOwners",
    ConclusionChildrenInternalIgnoreType = "conclusion___children___internal___ignoreType",
    ConclusionChildrenInternalMediaType = "conclusion___children___internal___mediaType",
    ConclusionChildrenInternalOwner = "conclusion___children___internal___owner",
    ConclusionChildrenInternalType = "conclusion___children___internal___type",
    ConclusionChildrenParentChildren = "conclusion___children___parent___children",
    ConclusionChildrenParentId = "conclusion___children___parent___id",
    ConclusionConclusion = "conclusion___conclusion",
    ConclusionId = "conclusion___id",
    ConclusionInternalContent = "conclusion___internal___content",
    ConclusionInternalContentDigest = "conclusion___internal___contentDigest",
    ConclusionInternalDescription = "conclusion___internal___description",
    ConclusionInternalFieldOwners = "conclusion___internal___fieldOwners",
    ConclusionInternalIgnoreType = "conclusion___internal___ignoreType",
    ConclusionInternalMediaType = "conclusion___internal___mediaType",
    ConclusionInternalOwner = "conclusion___internal___owner",
    ConclusionInternalType = "conclusion___internal___type",
    ConclusionParentChildren = "conclusion___parent___children",
    ConclusionParentChildrenChildren = "conclusion___parent___children___children",
    ConclusionParentChildrenId = "conclusion___parent___children___id",
    ConclusionParentId = "conclusion___parent___id",
    ConclusionParentInternalContent = "conclusion___parent___internal___content",
    ConclusionParentInternalContentDigest = "conclusion___parent___internal___contentDigest",
    ConclusionParentInternalDescription = "conclusion___parent___internal___description",
    ConclusionParentInternalFieldOwners = "conclusion___parent___internal___fieldOwners",
    ConclusionParentInternalIgnoreType = "conclusion___parent___internal___ignoreType",
    ConclusionParentInternalMediaType = "conclusion___parent___internal___mediaType",
    ConclusionParentInternalOwner = "conclusion___parent___internal___owner",
    ConclusionParentInternalType = "conclusion___parent___internal___type",
    ConclusionParentParentChildren = "conclusion___parent___parent___children",
    ConclusionParentParentId = "conclusion___parent___parent___id",
    ConclusionSysType = "conclusion___sys___type",
    ContentAppLink = "content___app_link",
    ContentChildren = "content___children",
    ContentChildrenChildren = "content___children___children",
    ContentChildrenChildrenChildren = "content___children___children___children",
    ContentChildrenChildrenId = "content___children___children___id",
    ContentChildrenId = "content___children___id",
    ContentChildrenInternalContent = "content___children___internal___content",
    ContentChildrenInternalContentDigest = "content___children___internal___contentDigest",
    ContentChildrenInternalDescription = "content___children___internal___description",
    ContentChildrenInternalFieldOwners = "content___children___internal___fieldOwners",
    ContentChildrenInternalIgnoreType = "content___children___internal___ignoreType",
    ContentChildrenInternalMediaType = "content___children___internal___mediaType",
    ContentChildrenInternalOwner = "content___children___internal___owner",
    ContentChildrenInternalType = "content___children___internal___type",
    ContentChildrenParentChildren = "content___children___parent___children",
    ContentChildrenParentId = "content___children___parent___id",
    ContentGithubLink = "content___github_link",
    ContentId = "content___id",
    ContentInternalContent = "content___internal___content",
    ContentInternalContentDigest = "content___internal___contentDigest",
    ContentInternalDescription = "content___internal___description",
    ContentInternalFieldOwners = "content___internal___fieldOwners",
    ContentInternalIgnoreType = "content___internal___ignoreType",
    ContentInternalMediaType = "content___internal___mediaType",
    ContentInternalOwner = "content___internal___owner",
    ContentInternalType = "content___internal___type",
    ContentParentChildren = "content___parent___children",
    ContentParentChildrenChildren = "content___parent___children___children",
    ContentParentChildrenId = "content___parent___children___id",
    ContentParentId = "content___parent___id",
    ContentParentInternalContent = "content___parent___internal___content",
    ContentParentInternalContentDigest = "content___parent___internal___contentDigest",
    ContentParentInternalDescription = "content___parent___internal___description",
    ContentParentInternalFieldOwners = "content___parent___internal___fieldOwners",
    ContentParentInternalIgnoreType = "content___parent___internal___ignoreType",
    ContentParentInternalMediaType = "content___parent___internal___mediaType",
    ContentParentInternalOwner = "content___parent___internal___owner",
    ContentParentInternalType = "content___parent___internal___type",
    ContentParentParentChildren = "content___parent___parent___children",
    ContentParentParentId = "content___parent___parent___id",
    ContentStacks = "content___stacks",
    ContentSysType = "content___sys___type",
    ContentTags = "content___tags",
    ContentfulId = "contentful_id",
    CoreRaw = "core___raw",
    CoreReferences = "core___references",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesChildren = "core___references___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesChildrenChildren = "core___references___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesChildrenId = "core___references___children___id",
    CoreReferencesContentfulId = "core___references___contentful_id",
    CoreReferencesCreatedAt = "core___references___createdAt",
    CoreReferencesDescription = "core___references___description",
    CoreReferencesFileContentType = "core___references___file___contentType",
    CoreReferencesFileFileName = "core___references___file___fileName",
    CoreReferencesFileUrl = "core___references___file___url",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFixedAspectRatio = "core___references___fixed___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFixedBase64 = "core___references___fixed___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFixedHeight = "core___references___fixed___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFixedSrc = "core___references___fixed___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFixedSrcSet = "core___references___fixed___srcSet",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFixedSrcSetWebp = "core___references___fixed___srcSetWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFixedSrcWebp = "core___references___fixed___srcWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFixedTracedSvg = "core___references___fixed___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFixedWidth = "core___references___fixed___width",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFluidAspectRatio = "core___references___fluid___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFluidBase64 = "core___references___fluid___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFluidSizes = "core___references___fluid___sizes",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFluidSrc = "core___references___fluid___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFluidSrcSet = "core___references___fluid___srcSet",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFluidSrcSetWebp = "core___references___fluid___srcSetWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFluidSrcWebp = "core___references___fluid___srcWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesFluidTracedSvg = "core___references___fluid___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesGatsbyImageData = "core___references___gatsbyImageData",
    CoreReferencesId = "core___references___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesInternalContent = "core___references___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesInternalContentDigest = "core___references___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesInternalDescription = "core___references___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesInternalFieldOwners = "core___references___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesInternalIgnoreType = "core___references___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesInternalMediaType = "core___references___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesInternalOwner = "core___references___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesInternalType = "core___references___internal___type",
    CoreReferencesNodeLocale = "core___references___node_locale",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesParentChildren = "core___references___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesParentId = "core___references___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesResizeAspectRatio = "core___references___resize___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesResizeBase64 = "core___references___resize___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesResizeHeight = "core___references___resize___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesResizeSrc = "core___references___resize___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesResizeTracedSvg = "core___references___resize___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    CoreReferencesResizeWidth = "core___references___resize___width",
    CoreReferencesSpaceId = "core___references___spaceId",
    CoreReferencesSysRevision = "core___references___sys___revision",
    CoreReferencesSysType = "core___references___sys___type",
    CoreReferencesTitle = "core___references___title",
    CoreReferencesUpdatedAt = "core___references___updatedAt",
    CreatedAt = "createdAt",
    Date = "date",
    DescriptionChildren = "description___children",
    DescriptionChildrenChildren = "description___children___children",
    DescriptionChildrenChildrenChildren = "description___children___children___children",
    DescriptionChildrenChildrenId = "description___children___children___id",
    DescriptionChildrenId = "description___children___id",
    DescriptionChildrenInternalContent = "description___children___internal___content",
    DescriptionChildrenInternalContentDigest = "description___children___internal___contentDigest",
    DescriptionChildrenInternalDescription = "description___children___internal___description",
    DescriptionChildrenInternalFieldOwners = "description___children___internal___fieldOwners",
    DescriptionChildrenInternalIgnoreType = "description___children___internal___ignoreType",
    DescriptionChildrenInternalMediaType = "description___children___internal___mediaType",
    DescriptionChildrenInternalOwner = "description___children___internal___owner",
    DescriptionChildrenInternalType = "description___children___internal___type",
    DescriptionChildrenParentChildren = "description___children___parent___children",
    DescriptionChildrenParentId = "description___children___parent___id",
    DescriptionDescription = "description___description",
    DescriptionId = "description___id",
    DescriptionInternalContent = "description___internal___content",
    DescriptionInternalContentDigest = "description___internal___contentDigest",
    DescriptionInternalDescription = "description___internal___description",
    DescriptionInternalFieldOwners = "description___internal___fieldOwners",
    DescriptionInternalIgnoreType = "description___internal___ignoreType",
    DescriptionInternalMediaType = "description___internal___mediaType",
    DescriptionInternalOwner = "description___internal___owner",
    DescriptionInternalType = "description___internal___type",
    DescriptionParentChildren = "description___parent___children",
    DescriptionParentChildrenChildren = "description___parent___children___children",
    DescriptionParentChildrenId = "description___parent___children___id",
    DescriptionParentId = "description___parent___id",
    DescriptionParentInternalContent = "description___parent___internal___content",
    DescriptionParentInternalContentDigest = "description___parent___internal___contentDigest",
    DescriptionParentInternalDescription = "description___parent___internal___description",
    DescriptionParentInternalFieldOwners = "description___parent___internal___fieldOwners",
    DescriptionParentInternalIgnoreType = "description___parent___internal___ignoreType",
    DescriptionParentInternalMediaType = "description___parent___internal___mediaType",
    DescriptionParentInternalOwner = "description___parent___internal___owner",
    DescriptionParentInternalType = "description___parent___internal___type",
    DescriptionParentParentChildren = "description___parent___parent___children",
    DescriptionParentParentId = "description___parent___parent___id",
    DescriptionSysType = "description___sys___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    GatsbyPath = "gatsbyPath",
    Id = "id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalContent = "internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalContentDigest = "internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalDescription = "internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalFieldOwners = "internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalIgnoreType = "internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalMediaType = "internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalOwner = "internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalType = "internal___type",
    IsFreelanceWork = "isFreelanceWork",
    LessonChildren = "lesson___children",
    LessonChildrenChildren = "lesson___children___children",
    LessonChildrenChildrenChildren = "lesson___children___children___children",
    LessonChildrenChildrenId = "lesson___children___children___id",
    LessonChildrenId = "lesson___children___id",
    LessonChildrenInternalContent = "lesson___children___internal___content",
    LessonChildrenInternalContentDigest = "lesson___children___internal___contentDigest",
    LessonChildrenInternalDescription = "lesson___children___internal___description",
    LessonChildrenInternalFieldOwners = "lesson___children___internal___fieldOwners",
    LessonChildrenInternalIgnoreType = "lesson___children___internal___ignoreType",
    LessonChildrenInternalMediaType = "lesson___children___internal___mediaType",
    LessonChildrenInternalOwner = "lesson___children___internal___owner",
    LessonChildrenInternalType = "lesson___children___internal___type",
    LessonChildrenParentChildren = "lesson___children___parent___children",
    LessonChildrenParentId = "lesson___children___parent___id",
    LessonId = "lesson___id",
    LessonInternalContent = "lesson___internal___content",
    LessonInternalContentDigest = "lesson___internal___contentDigest",
    LessonInternalDescription = "lesson___internal___description",
    LessonInternalFieldOwners = "lesson___internal___fieldOwners",
    LessonInternalIgnoreType = "lesson___internal___ignoreType",
    LessonInternalMediaType = "lesson___internal___mediaType",
    LessonInternalOwner = "lesson___internal___owner",
    LessonInternalType = "lesson___internal___type",
    LessonLesson = "lesson___lesson",
    LessonParentChildren = "lesson___parent___children",
    LessonParentChildrenChildren = "lesson___parent___children___children",
    LessonParentChildrenId = "lesson___parent___children___id",
    LessonParentId = "lesson___parent___id",
    LessonParentInternalContent = "lesson___parent___internal___content",
    LessonParentInternalContentDigest = "lesson___parent___internal___contentDigest",
    LessonParentInternalDescription = "lesson___parent___internal___description",
    LessonParentInternalFieldOwners = "lesson___parent___internal___fieldOwners",
    LessonParentInternalIgnoreType = "lesson___parent___internal___ignoreType",
    LessonParentInternalMediaType = "lesson___parent___internal___mediaType",
    LessonParentInternalOwner = "lesson___parent___internal___owner",
    LessonParentInternalType = "lesson___parent___internal___type",
    LessonParentParentChildren = "lesson___parent___parent___children",
    LessonParentParentId = "lesson___parent___parent___id",
    LessonSysType = "lesson___sys___type",
    NodeLocale = "node_locale",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildren = "parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenChildren = "parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenChildrenChildren = "parent___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenChildrenId = "parent___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenId = "parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalContent = "parent___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalDescription = "parent___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalType = "parent___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenParentChildren = "parent___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenParentId = "parent___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentId = "parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalContent = "parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalContentDigest = "parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalDescription = "parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalMediaType = "parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalOwner = "parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalType = "parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentChildren = "parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentChildrenChildren = "parent___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentChildrenId = "parent___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentId = "parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalContent = "parent___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalDescription = "parent___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalOwner = "parent___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalType = "parent___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentParentChildren = "parent___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentParentId = "parent___parent___parent___id",
    ResumeChildren = "resume___children",
    ResumeChildrenChildren = "resume___children___children",
    ResumeChildrenChildrenChildren = "resume___children___children___children",
    ResumeChildrenChildrenId = "resume___children___children___id",
    ResumeChildrenId = "resume___children___id",
    ResumeChildrenInternalContent = "resume___children___internal___content",
    ResumeChildrenInternalContentDigest = "resume___children___internal___contentDigest",
    ResumeChildrenInternalDescription = "resume___children___internal___description",
    ResumeChildrenInternalFieldOwners = "resume___children___internal___fieldOwners",
    ResumeChildrenInternalIgnoreType = "resume___children___internal___ignoreType",
    ResumeChildrenInternalMediaType = "resume___children___internal___mediaType",
    ResumeChildrenInternalOwner = "resume___children___internal___owner",
    ResumeChildrenInternalType = "resume___children___internal___type",
    ResumeChildrenParentChildren = "resume___children___parent___children",
    ResumeChildrenParentId = "resume___children___parent___id",
    ResumeId = "resume___id",
    ResumeInternalContent = "resume___internal___content",
    ResumeInternalContentDigest = "resume___internal___contentDigest",
    ResumeInternalDescription = "resume___internal___description",
    ResumeInternalFieldOwners = "resume___internal___fieldOwners",
    ResumeInternalIgnoreType = "resume___internal___ignoreType",
    ResumeInternalMediaType = "resume___internal___mediaType",
    ResumeInternalOwner = "resume___internal___owner",
    ResumeInternalType = "resume___internal___type",
    ResumeParentChildren = "resume___parent___children",
    ResumeParentChildrenChildren = "resume___parent___children___children",
    ResumeParentChildrenId = "resume___parent___children___id",
    ResumeParentId = "resume___parent___id",
    ResumeParentInternalContent = "resume___parent___internal___content",
    ResumeParentInternalContentDigest = "resume___parent___internal___contentDigest",
    ResumeParentInternalDescription = "resume___parent___internal___description",
    ResumeParentInternalFieldOwners = "resume___parent___internal___fieldOwners",
    ResumeParentInternalIgnoreType = "resume___parent___internal___ignoreType",
    ResumeParentInternalMediaType = "resume___parent___internal___mediaType",
    ResumeParentInternalOwner = "resume___parent___internal___owner",
    ResumeParentInternalType = "resume___parent___internal___type",
    ResumeParentParentChildren = "resume___parent___parent___children",
    ResumeParentParentId = "resume___parent___parent___id",
    ResumeResume = "resume___resume",
    ResumeSysType = "resume___sys___type",
    Role = "role",
    SpaceId = "spaceId",
    SysContentTypeSysId = "sys___contentType___sys___id",
    SysContentTypeSysLinkType = "sys___contentType___sys___linkType",
    SysContentTypeSysType = "sys___contentType___sys___type",
    SysRevision = "sys___revision",
    SysType = "sys___type",
    Team = "team",
    TeamStack = "teamStack",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailChildren = "thumbnail___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailChildrenChildren = "thumbnail___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailChildrenChildrenChildren = "thumbnail___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailChildrenChildrenId = "thumbnail___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailChildrenId = "thumbnail___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailChildrenInternalContent = "thumbnail___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailChildrenInternalContentDigest = "thumbnail___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailChildrenInternalDescription = "thumbnail___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailChildrenInternalFieldOwners = "thumbnail___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailChildrenInternalIgnoreType = "thumbnail___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailChildrenInternalMediaType = "thumbnail___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailChildrenInternalOwner = "thumbnail___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailChildrenInternalType = "thumbnail___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailChildrenParentChildren = "thumbnail___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailChildrenParentId = "thumbnail___children___parent___id",
    ThumbnailContentfulId = "thumbnail___contentful_id",
    ThumbnailCreatedAt = "thumbnail___createdAt",
    ThumbnailDescription = "thumbnail___description",
    ThumbnailFileContentType = "thumbnail___file___contentType",
    ThumbnailFileDetailsSize = "thumbnail___file___details___size",
    ThumbnailFileFileName = "thumbnail___file___fileName",
    ThumbnailFileUrl = "thumbnail___file___url",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFixedAspectRatio = "thumbnail___fixed___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFixedBase64 = "thumbnail___fixed___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFixedHeight = "thumbnail___fixed___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFixedSrc = "thumbnail___fixed___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFixedSrcSet = "thumbnail___fixed___srcSet",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFixedSrcSetWebp = "thumbnail___fixed___srcSetWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFixedSrcWebp = "thumbnail___fixed___srcWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFixedTracedSvg = "thumbnail___fixed___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFixedWidth = "thumbnail___fixed___width",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFluidAspectRatio = "thumbnail___fluid___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFluidBase64 = "thumbnail___fluid___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFluidSizes = "thumbnail___fluid___sizes",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFluidSrc = "thumbnail___fluid___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFluidSrcSet = "thumbnail___fluid___srcSet",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFluidSrcSetWebp = "thumbnail___fluid___srcSetWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFluidSrcWebp = "thumbnail___fluid___srcWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailFluidTracedSvg = "thumbnail___fluid___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailGatsbyImageData = "thumbnail___gatsbyImageData",
    ThumbnailId = "thumbnail___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailInternalContent = "thumbnail___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailInternalContentDigest = "thumbnail___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailInternalDescription = "thumbnail___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailInternalFieldOwners = "thumbnail___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailInternalIgnoreType = "thumbnail___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailInternalMediaType = "thumbnail___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailInternalOwner = "thumbnail___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailInternalType = "thumbnail___internal___type",
    ThumbnailNodeLocale = "thumbnail___node_locale",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailParentChildren = "thumbnail___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailParentChildrenChildren = "thumbnail___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailParentChildrenId = "thumbnail___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailParentId = "thumbnail___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailParentInternalContent = "thumbnail___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailParentInternalContentDigest = "thumbnail___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailParentInternalDescription = "thumbnail___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailParentInternalFieldOwners = "thumbnail___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailParentInternalIgnoreType = "thumbnail___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailParentInternalMediaType = "thumbnail___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailParentInternalOwner = "thumbnail___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailParentInternalType = "thumbnail___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailParentParentChildren = "thumbnail___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailParentParentId = "thumbnail___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailResizeAspectRatio = "thumbnail___resize___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailResizeBase64 = "thumbnail___resize___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailResizeHeight = "thumbnail___resize___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailResizeSrc = "thumbnail___resize___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailResizeTracedSvg = "thumbnail___resize___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ThumbnailResizeWidth = "thumbnail___resize___width",
    ThumbnailSpaceId = "thumbnail___spaceId",
    ThumbnailSysRevision = "thumbnail___sys___revision",
    ThumbnailSysType = "thumbnail___sys___type",
    ThumbnailTitle = "thumbnail___title",
    ThumbnailUpdatedAt = "thumbnail___updatedAt",
    Timeline = "timeline",
    Title = "title",
    UpdatedAt = "updatedAt",
    UsedChildren = "used___children",
    UsedChildrenChildren = "used___children___children",
    UsedChildrenChildrenChildren = "used___children___children___children",
    UsedChildrenChildrenId = "used___children___children___id",
    UsedChildrenId = "used___children___id",
    UsedChildrenInternalContent = "used___children___internal___content",
    UsedChildrenInternalContentDigest = "used___children___internal___contentDigest",
    UsedChildrenInternalDescription = "used___children___internal___description",
    UsedChildrenInternalFieldOwners = "used___children___internal___fieldOwners",
    UsedChildrenInternalIgnoreType = "used___children___internal___ignoreType",
    UsedChildrenInternalMediaType = "used___children___internal___mediaType",
    UsedChildrenInternalOwner = "used___children___internal___owner",
    UsedChildrenInternalType = "used___children___internal___type",
    UsedChildrenParentChildren = "used___children___parent___children",
    UsedChildrenParentId = "used___children___parent___id",
    UsedId = "used___id",
    UsedInternalContent = "used___internal___content",
    UsedInternalContentDigest = "used___internal___contentDigest",
    UsedInternalDescription = "used___internal___description",
    UsedInternalFieldOwners = "used___internal___fieldOwners",
    UsedInternalIgnoreType = "used___internal___ignoreType",
    UsedInternalMediaType = "used___internal___mediaType",
    UsedInternalOwner = "used___internal___owner",
    UsedInternalType = "used___internal___type",
    UsedParentChildren = "used___parent___children",
    UsedParentChildrenChildren = "used___parent___children___children",
    UsedParentChildrenId = "used___parent___children___id",
    UsedParentId = "used___parent___id",
    UsedParentInternalContent = "used___parent___internal___content",
    UsedParentInternalContentDigest = "used___parent___internal___contentDigest",
    UsedParentInternalDescription = "used___parent___internal___description",
    UsedParentInternalFieldOwners = "used___parent___internal___fieldOwners",
    UsedParentInternalIgnoreType = "used___parent___internal___ignoreType",
    UsedParentInternalMediaType = "used___parent___internal___mediaType",
    UsedParentInternalOwner = "used___parent___internal___owner",
    UsedParentInternalType = "used___parent___internal___type",
    UsedParentParentChildren = "used___parent___parent___children",
    UsedParentParentId = "used___parent___parent___id",
    UsedSysType = "used___sys___type",
    UsedUsed = "used___used",
}

export type ContentfulProjectsFilterInput = {
    aboutImages?: InputMaybe<ContentfulAssetFilterListInput>;
    childContentfulProjectsConclusionTextNode?: InputMaybe<ContentfulProjectsConclusionTextNodeFilterInput>;
    childContentfulProjectsContentJsonNode?: InputMaybe<ContentfulProjectsContentJsonNodeFilterInput>;
    childContentfulProjectsDescriptionTextNode?: InputMaybe<ContentfulProjectsDescriptionTextNodeFilterInput>;
    childContentfulProjectsLessonTextNode?: InputMaybe<ContentfulProjectsLessonTextNodeFilterInput>;
    childContentfulProjectsResumeTextNode?: InputMaybe<ContentfulProjectsResumeTextNodeFilterInput>;
    childContentfulProjectsUsedTextNode?: InputMaybe<ContentfulProjectsUsedTextNodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    childrenContentfulProjectsConclusionTextNode?: InputMaybe<ContentfulProjectsConclusionTextNodeFilterListInput>;
    childrenContentfulProjectsContentJsonNode?: InputMaybe<ContentfulProjectsContentJsonNodeFilterListInput>;
    childrenContentfulProjectsDescriptionTextNode?: InputMaybe<ContentfulProjectsDescriptionTextNodeFilterListInput>;
    childrenContentfulProjectsLessonTextNode?: InputMaybe<ContentfulProjectsLessonTextNodeFilterListInput>;
    childrenContentfulProjectsResumeTextNode?: InputMaybe<ContentfulProjectsResumeTextNodeFilterListInput>;
    childrenContentfulProjectsUsedTextNode?: InputMaybe<ContentfulProjectsUsedTextNodeFilterListInput>;
    conclusion?: InputMaybe<ContentfulProjectsConclusionTextNodeFilterInput>;
    content?: InputMaybe<ContentfulProjectsContentJsonNodeFilterInput>;
    contentful_id?: InputMaybe<StringQueryOperatorInput>;
    core?: InputMaybe<ContentfulProjectsCoreFilterInput>;
    createdAt?: InputMaybe<DateQueryOperatorInput>;
    date?: InputMaybe<DateQueryOperatorInput>;
    description?: InputMaybe<ContentfulProjectsDescriptionTextNodeFilterInput>;
    gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    isFreelanceWork?: InputMaybe<BooleanQueryOperatorInput>;
    lesson?: InputMaybe<ContentfulProjectsLessonTextNodeFilterInput>;
    node_locale?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    resume?: InputMaybe<ContentfulProjectsResumeTextNodeFilterInput>;
    role?: InputMaybe<StringQueryOperatorInput>;
    spaceId?: InputMaybe<StringQueryOperatorInput>;
    sys?: InputMaybe<ContentfulProjectsSysFilterInput>;
    team?: InputMaybe<StringQueryOperatorInput>;
    teamStack?: InputMaybe<StringQueryOperatorInput>;
    thumbnail?: InputMaybe<ContentfulAssetFilterInput>;
    timeline?: InputMaybe<StringQueryOperatorInput>;
    title?: InputMaybe<StringQueryOperatorInput>;
    updatedAt?: InputMaybe<DateQueryOperatorInput>;
    used?: InputMaybe<ContentfulProjectsUsedTextNodeFilterInput>;
};

export type ContentfulProjectsGroupConnection = {
    __typename?: "ContentfulProjectsGroupConnection";
    edges: Array<ContentfulProjectsEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<ContentfulProjects>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type ContentfulProjectsSortInput = {
    fields?: InputMaybe<Array<InputMaybe<ContentfulProjectsFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulProjectsSys = {
    __typename?: "ContentfulProjectsSys";
    contentType?: Maybe<ContentfulProjectsSysContentType>;
    revision?: Maybe<Scalars["Int"]>;
    type?: Maybe<Scalars["String"]>;
};

export type ContentfulProjectsSysContentType = {
    __typename?: "ContentfulProjectsSysContentType";
    sys?: Maybe<ContentfulProjectsSysContentTypeSys>;
};

export type ContentfulProjectsSysContentTypeFilterInput = {
    sys?: InputMaybe<ContentfulProjectsSysContentTypeSysFilterInput>;
};

export type ContentfulProjectsSysContentTypeSys = {
    __typename?: "ContentfulProjectsSysContentTypeSys";
    id?: Maybe<Scalars["String"]>;
    linkType?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
};

export type ContentfulProjectsSysContentTypeSysFilterInput = {
    id?: InputMaybe<StringQueryOperatorInput>;
    linkType?: InputMaybe<StringQueryOperatorInput>;
    type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProjectsSysFilterInput = {
    contentType?: InputMaybe<ContentfulProjectsSysContentTypeFilterInput>;
    revision?: InputMaybe<IntQueryOperatorInput>;
    type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulReference = {
    contentful_id: Scalars["String"];
    id: Scalars["ID"];
};

export type ContentfulResize = {
    __typename?: "ContentfulResize";
    aspectRatio?: Maybe<Scalars["Float"]>;
    base64?: Maybe<Scalars["String"]>;
    height?: Maybe<Scalars["Int"]>;
    src?: Maybe<Scalars["String"]>;
    tracedSVG?: Maybe<Scalars["String"]>;
    width?: Maybe<Scalars["Int"]>;
};

export type ContentfulResizeFilterInput = {
    aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
    base64?: InputMaybe<StringQueryOperatorInput>;
    height?: InputMaybe<IntQueryOperatorInput>;
    src?: InputMaybe<StringQueryOperatorInput>;
    tracedSVG?: InputMaybe<StringQueryOperatorInput>;
    width?: InputMaybe<IntQueryOperatorInput>;
};

export type DateQueryOperatorInput = {
    eq?: InputMaybe<Scalars["Date"]>;
    gt?: InputMaybe<Scalars["Date"]>;
    gte?: InputMaybe<Scalars["Date"]>;
    in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
    lt?: InputMaybe<Scalars["Date"]>;
    lte?: InputMaybe<Scalars["Date"]>;
    ne?: InputMaybe<Scalars["Date"]>;
    nin?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
    __typename?: "Directory";
    absolutePath: Scalars["String"];
    accessTime: Scalars["Date"];
    atime: Scalars["Date"];
    atimeMs: Scalars["Float"];
    base: Scalars["String"];
    birthTime: Scalars["Date"];
    /** @deprecated Use `birthTime` instead */
    birthtime?: Maybe<Scalars["Date"]>;
    /** @deprecated Use `birthTime` instead */
    birthtimeMs?: Maybe<Scalars["Float"]>;
    blksize?: Maybe<Scalars["Int"]>;
    blocks?: Maybe<Scalars["Int"]>;
    changeTime: Scalars["Date"];
    children: Array<Node>;
    ctime: Scalars["Date"];
    ctimeMs: Scalars["Float"];
    dev: Scalars["Int"];
    dir: Scalars["String"];
    ext: Scalars["String"];
    extension: Scalars["String"];
    gid: Scalars["Int"];
    id: Scalars["ID"];
    ino: Scalars["Float"];
    internal: Internal;
    mode: Scalars["Int"];
    modifiedTime: Scalars["Date"];
    mtime: Scalars["Date"];
    mtimeMs: Scalars["Float"];
    name: Scalars["String"];
    nlink: Scalars["Int"];
    parent?: Maybe<Node>;
    prettySize: Scalars["String"];
    rdev: Scalars["Int"];
    relativeDirectory: Scalars["String"];
    relativePath: Scalars["String"];
    root: Scalars["String"];
    size: Scalars["Int"];
    sourceInstanceName: Scalars["String"];
    uid: Scalars["Int"];
};

export type DirectoryAccessTimeArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryModifiedTimeArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryConnection = {
    __typename?: "DirectoryConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<DirectoryEdge>;
    group: Array<DirectoryGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type DirectoryConnectionDistinctArgs = {
    field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
    field: DirectoryFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type DirectoryConnectionMaxArgs = {
    field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
    field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
    field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
    __typename?: "DirectoryEdge";
    next?: Maybe<Directory>;
    node: Directory;
    previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
    AbsolutePath = "absolutePath",
    AccessTime = "accessTime",
    Atime = "atime",
    AtimeMs = "atimeMs",
    Base = "base",
    BirthTime = "birthTime",
    Birthtime = "birthtime",
    BirthtimeMs = "birthtimeMs",
    Blksize = "blksize",
    Blocks = "blocks",
    ChangeTime = "changeTime",
    Children = "children",
    ChildrenChildren = "children___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenId = "children___id",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentParentId = "children___parent___parent___id",
    Ctime = "ctime",
    CtimeMs = "ctimeMs",
    Dev = "dev",
    Dir = "dir",
    Ext = "ext",
    Extension = "extension",
    Gid = "gid",
    Id = "id",
    Ino = "ino",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    Mode = "mode",
    ModifiedTime = "modifiedTime",
    Mtime = "mtime",
    MtimeMs = "mtimeMs",
    Name = "name",
    Nlink = "nlink",
    ParentChildren = "parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenId = "parent___children___id",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentId = "parent___id",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentId = "parent___parent___id",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentParentId = "parent___parent___parent___id",
    PrettySize = "prettySize",
    Rdev = "rdev",
    RelativeDirectory = "relativeDirectory",
    RelativePath = "relativePath",
    Root = "root",
    Size = "size",
    SourceInstanceName = "sourceInstanceName",
    Uid = "uid",
}

export type DirectoryFilterInput = {
    absolutePath?: InputMaybe<StringQueryOperatorInput>;
    accessTime?: InputMaybe<DateQueryOperatorInput>;
    atime?: InputMaybe<DateQueryOperatorInput>;
    atimeMs?: InputMaybe<FloatQueryOperatorInput>;
    base?: InputMaybe<StringQueryOperatorInput>;
    birthTime?: InputMaybe<DateQueryOperatorInput>;
    birthtime?: InputMaybe<DateQueryOperatorInput>;
    birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
    blksize?: InputMaybe<IntQueryOperatorInput>;
    blocks?: InputMaybe<IntQueryOperatorInput>;
    changeTime?: InputMaybe<DateQueryOperatorInput>;
    children?: InputMaybe<NodeFilterListInput>;
    ctime?: InputMaybe<DateQueryOperatorInput>;
    ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
    dev?: InputMaybe<IntQueryOperatorInput>;
    dir?: InputMaybe<StringQueryOperatorInput>;
    ext?: InputMaybe<StringQueryOperatorInput>;
    extension?: InputMaybe<StringQueryOperatorInput>;
    gid?: InputMaybe<IntQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    ino?: InputMaybe<FloatQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    mode?: InputMaybe<IntQueryOperatorInput>;
    modifiedTime?: InputMaybe<DateQueryOperatorInput>;
    mtime?: InputMaybe<DateQueryOperatorInput>;
    mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
    nlink?: InputMaybe<IntQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    prettySize?: InputMaybe<StringQueryOperatorInput>;
    rdev?: InputMaybe<IntQueryOperatorInput>;
    relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
    relativePath?: InputMaybe<StringQueryOperatorInput>;
    root?: InputMaybe<StringQueryOperatorInput>;
    size?: InputMaybe<IntQueryOperatorInput>;
    sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
    uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
    __typename?: "DirectoryGroupConnection";
    edges: Array<DirectoryEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type DirectorySortInput = {
    fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
    highlight: Scalars["String"];
    opacity?: InputMaybe<Scalars["Int"]>;
    shadow: Scalars["String"];
};

export type File = Node & {
    __typename?: "File";
    absolutePath: Scalars["String"];
    accessTime: Scalars["Date"];
    atime: Scalars["Date"];
    atimeMs: Scalars["Float"];
    base: Scalars["String"];
    birthTime: Scalars["Date"];
    /** @deprecated Use `birthTime` instead */
    birthtime?: Maybe<Scalars["Date"]>;
    /** @deprecated Use `birthTime` instead */
    birthtimeMs?: Maybe<Scalars["Float"]>;
    blksize?: Maybe<Scalars["Int"]>;
    blocks?: Maybe<Scalars["Int"]>;
    changeTime: Scalars["Date"];
    childImageSharp?: Maybe<ImageSharp>;
    children: Array<Node>;
    childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
    ctime: Scalars["Date"];
    ctimeMs: Scalars["Float"];
    dev: Scalars["Int"];
    dir: Scalars["String"];
    ext: Scalars["String"];
    extension: Scalars["String"];
    gid: Scalars["Int"];
    id: Scalars["ID"];
    ino: Scalars["Float"];
    internal: Internal;
    mode: Scalars["Int"];
    modifiedTime: Scalars["Date"];
    mtime: Scalars["Date"];
    mtimeMs: Scalars["Float"];
    name: Scalars["String"];
    nlink: Scalars["Int"];
    parent?: Maybe<Node>;
    prettySize: Scalars["String"];
    publicURL?: Maybe<Scalars["String"]>;
    rdev: Scalars["Int"];
    relativeDirectory: Scalars["String"];
    relativePath: Scalars["String"];
    root: Scalars["String"];
    size: Scalars["Int"];
    sourceInstanceName: Scalars["String"];
    uid: Scalars["Int"];
};

export type FileAccessTimeArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type FileModifiedTimeArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type FileConnection = {
    __typename?: "FileConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<FileEdge>;
    group: Array<FileGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type FileConnectionDistinctArgs = {
    field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
    field: FileFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type FileConnectionMaxArgs = {
    field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
    field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
    field: FileFieldsEnum;
};

export type FileEdge = {
    __typename?: "FileEdge";
    next?: Maybe<File>;
    node: File;
    previous?: Maybe<File>;
};

export enum FileFieldsEnum {
    AbsolutePath = "absolutePath",
    AccessTime = "accessTime",
    Atime = "atime",
    AtimeMs = "atimeMs",
    Base = "base",
    BirthTime = "birthTime",
    Birthtime = "birthtime",
    BirthtimeMs = "birthtimeMs",
    Blksize = "blksize",
    Blocks = "blocks",
    ChangeTime = "changeTime",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpChildren = "childImageSharp___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpChildrenChildren = "childImageSharp___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpChildrenChildrenChildren = "childImageSharp___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpChildrenChildrenId = "childImageSharp___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpChildrenId = "childImageSharp___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpChildrenInternalContent = "childImageSharp___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpChildrenInternalContentDigest = "childImageSharp___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpChildrenInternalDescription = "childImageSharp___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpChildrenInternalFieldOwners = "childImageSharp___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpChildrenInternalIgnoreType = "childImageSharp___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpChildrenInternalMediaType = "childImageSharp___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpChildrenInternalOwner = "childImageSharp___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpChildrenInternalType = "childImageSharp___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpChildrenParentChildren = "childImageSharp___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpChildrenParentId = "childImageSharp___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFixedAspectRatio = "childImageSharp___fixed___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFixedBase64 = "childImageSharp___fixed___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFixedHeight = "childImageSharp___fixed___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFixedOriginalName = "childImageSharp___fixed___originalName",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFixedSrc = "childImageSharp___fixed___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFixedSrcSet = "childImageSharp___fixed___srcSet",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFixedSrcSetWebp = "childImageSharp___fixed___srcSetWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFixedSrcWebp = "childImageSharp___fixed___srcWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFixedTracedSvg = "childImageSharp___fixed___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFixedWidth = "childImageSharp___fixed___width",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFluidAspectRatio = "childImageSharp___fluid___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFluidBase64 = "childImageSharp___fluid___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFluidOriginalImg = "childImageSharp___fluid___originalImg",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFluidOriginalName = "childImageSharp___fluid___originalName",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFluidPresentationHeight = "childImageSharp___fluid___presentationHeight",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFluidPresentationWidth = "childImageSharp___fluid___presentationWidth",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFluidSizes = "childImageSharp___fluid___sizes",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFluidSrc = "childImageSharp___fluid___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFluidSrcSet = "childImageSharp___fluid___srcSet",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFluidSrcSetWebp = "childImageSharp___fluid___srcSetWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFluidSrcWebp = "childImageSharp___fluid___srcWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpFluidTracedSvg = "childImageSharp___fluid___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpGatsbyImageData = "childImageSharp___gatsbyImageData",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpId = "childImageSharp___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpInternalContent = "childImageSharp___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpInternalContentDigest = "childImageSharp___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpInternalDescription = "childImageSharp___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpInternalFieldOwners = "childImageSharp___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpInternalIgnoreType = "childImageSharp___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpInternalMediaType = "childImageSharp___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpInternalOwner = "childImageSharp___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpInternalType = "childImageSharp___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpOriginalHeight = "childImageSharp___original___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpOriginalSrc = "childImageSharp___original___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpOriginalWidth = "childImageSharp___original___width",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpParentChildren = "childImageSharp___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpParentChildrenChildren = "childImageSharp___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpParentChildrenId = "childImageSharp___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpParentId = "childImageSharp___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpParentInternalContent = "childImageSharp___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpParentInternalContentDigest = "childImageSharp___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpParentInternalDescription = "childImageSharp___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpParentInternalFieldOwners = "childImageSharp___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpParentInternalIgnoreType = "childImageSharp___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpParentInternalMediaType = "childImageSharp___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpParentInternalOwner = "childImageSharp___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpParentInternalType = "childImageSharp___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpParentParentChildren = "childImageSharp___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpParentParentId = "childImageSharp___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpResizeAspectRatio = "childImageSharp___resize___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpResizeHeight = "childImageSharp___resize___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpResizeOriginalName = "childImageSharp___resize___originalName",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpResizeSrc = "childImageSharp___resize___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpResizeTracedSvg = "childImageSharp___resize___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildImageSharpResizeWidth = "childImageSharp___resize___width",
    Children = "children",
    ChildrenImageSharp = "childrenImageSharp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpChildren = "childrenImageSharp___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpChildrenChildren = "childrenImageSharp___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpChildrenChildrenChildren = "childrenImageSharp___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpChildrenChildrenId = "childrenImageSharp___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpChildrenId = "childrenImageSharp___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpChildrenInternalContent = "childrenImageSharp___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpChildrenInternalContentDigest = "childrenImageSharp___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpChildrenInternalDescription = "childrenImageSharp___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpChildrenInternalFieldOwners = "childrenImageSharp___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpChildrenInternalIgnoreType = "childrenImageSharp___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpChildrenInternalMediaType = "childrenImageSharp___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpChildrenInternalOwner = "childrenImageSharp___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpChildrenInternalType = "childrenImageSharp___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpChildrenParentChildren = "childrenImageSharp___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpChildrenParentId = "childrenImageSharp___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFixedAspectRatio = "childrenImageSharp___fixed___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFixedBase64 = "childrenImageSharp___fixed___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFixedHeight = "childrenImageSharp___fixed___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFixedOriginalName = "childrenImageSharp___fixed___originalName",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFixedSrc = "childrenImageSharp___fixed___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFixedSrcSet = "childrenImageSharp___fixed___srcSet",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFixedSrcSetWebp = "childrenImageSharp___fixed___srcSetWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFixedSrcWebp = "childrenImageSharp___fixed___srcWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFixedTracedSvg = "childrenImageSharp___fixed___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFixedWidth = "childrenImageSharp___fixed___width",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFluidAspectRatio = "childrenImageSharp___fluid___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFluidBase64 = "childrenImageSharp___fluid___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFluidOriginalImg = "childrenImageSharp___fluid___originalImg",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFluidOriginalName = "childrenImageSharp___fluid___originalName",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFluidPresentationHeight = "childrenImageSharp___fluid___presentationHeight",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFluidPresentationWidth = "childrenImageSharp___fluid___presentationWidth",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFluidSizes = "childrenImageSharp___fluid___sizes",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFluidSrc = "childrenImageSharp___fluid___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFluidSrcSet = "childrenImageSharp___fluid___srcSet",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFluidSrcSetWebp = "childrenImageSharp___fluid___srcSetWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFluidSrcWebp = "childrenImageSharp___fluid___srcWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpFluidTracedSvg = "childrenImageSharp___fluid___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpGatsbyImageData = "childrenImageSharp___gatsbyImageData",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpId = "childrenImageSharp___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpInternalContent = "childrenImageSharp___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpInternalContentDigest = "childrenImageSharp___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpInternalDescription = "childrenImageSharp___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpInternalFieldOwners = "childrenImageSharp___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpInternalIgnoreType = "childrenImageSharp___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpInternalMediaType = "childrenImageSharp___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpInternalOwner = "childrenImageSharp___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpInternalType = "childrenImageSharp___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpOriginalHeight = "childrenImageSharp___original___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpOriginalSrc = "childrenImageSharp___original___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpOriginalWidth = "childrenImageSharp___original___width",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpParentChildren = "childrenImageSharp___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpParentChildrenChildren = "childrenImageSharp___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpParentChildrenId = "childrenImageSharp___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpParentId = "childrenImageSharp___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpParentInternalContent = "childrenImageSharp___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpParentInternalContentDigest = "childrenImageSharp___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpParentInternalDescription = "childrenImageSharp___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpParentInternalFieldOwners = "childrenImageSharp___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpParentInternalIgnoreType = "childrenImageSharp___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpParentInternalMediaType = "childrenImageSharp___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpParentInternalOwner = "childrenImageSharp___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpParentInternalType = "childrenImageSharp___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpParentParentChildren = "childrenImageSharp___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpParentParentId = "childrenImageSharp___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpResizeAspectRatio = "childrenImageSharp___resize___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpResizeHeight = "childrenImageSharp___resize___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpResizeOriginalName = "childrenImageSharp___resize___originalName",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpResizeSrc = "childrenImageSharp___resize___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpResizeTracedSvg = "childrenImageSharp___resize___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenImageSharpResizeWidth = "childrenImageSharp___resize___width",
    ChildrenChildren = "children___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenId = "children___id",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentParentId = "children___parent___parent___id",
    Ctime = "ctime",
    CtimeMs = "ctimeMs",
    Dev = "dev",
    Dir = "dir",
    Ext = "ext",
    Extension = "extension",
    Gid = "gid",
    Id = "id",
    Ino = "ino",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    Mode = "mode",
    ModifiedTime = "modifiedTime",
    Mtime = "mtime",
    MtimeMs = "mtimeMs",
    Name = "name",
    Nlink = "nlink",
    ParentChildren = "parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenId = "parent___children___id",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentId = "parent___id",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentId = "parent___parent___id",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentParentId = "parent___parent___parent___id",
    PrettySize = "prettySize",
    PublicUrl = "publicURL",
    Rdev = "rdev",
    RelativeDirectory = "relativeDirectory",
    RelativePath = "relativePath",
    Root = "root",
    Size = "size",
    SourceInstanceName = "sourceInstanceName",
    Uid = "uid",
}

export type FileFilterInput = {
    absolutePath?: InputMaybe<StringQueryOperatorInput>;
    accessTime?: InputMaybe<DateQueryOperatorInput>;
    atime?: InputMaybe<DateQueryOperatorInput>;
    atimeMs?: InputMaybe<FloatQueryOperatorInput>;
    base?: InputMaybe<StringQueryOperatorInput>;
    birthTime?: InputMaybe<DateQueryOperatorInput>;
    birthtime?: InputMaybe<DateQueryOperatorInput>;
    birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
    blksize?: InputMaybe<IntQueryOperatorInput>;
    blocks?: InputMaybe<IntQueryOperatorInput>;
    changeTime?: InputMaybe<DateQueryOperatorInput>;
    childImageSharp?: InputMaybe<ImageSharpFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
    ctime?: InputMaybe<DateQueryOperatorInput>;
    ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
    dev?: InputMaybe<IntQueryOperatorInput>;
    dir?: InputMaybe<StringQueryOperatorInput>;
    ext?: InputMaybe<StringQueryOperatorInput>;
    extension?: InputMaybe<StringQueryOperatorInput>;
    gid?: InputMaybe<IntQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    ino?: InputMaybe<FloatQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    mode?: InputMaybe<IntQueryOperatorInput>;
    modifiedTime?: InputMaybe<DateQueryOperatorInput>;
    mtime?: InputMaybe<DateQueryOperatorInput>;
    mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
    nlink?: InputMaybe<IntQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    prettySize?: InputMaybe<StringQueryOperatorInput>;
    publicURL?: InputMaybe<StringQueryOperatorInput>;
    rdev?: InputMaybe<IntQueryOperatorInput>;
    relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
    relativePath?: InputMaybe<StringQueryOperatorInput>;
    root?: InputMaybe<StringQueryOperatorInput>;
    size?: InputMaybe<IntQueryOperatorInput>;
    sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
    uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
    __typename?: "FileGroupConnection";
    edges: Array<FileEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type FileSortInput = {
    fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
    eq?: InputMaybe<Scalars["Float"]>;
    gt?: InputMaybe<Scalars["Float"]>;
    gte?: InputMaybe<Scalars["Float"]>;
    in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
    lt?: InputMaybe<Scalars["Float"]>;
    lte?: InputMaybe<Scalars["Float"]>;
    ne?: InputMaybe<Scalars["Float"]>;
    nin?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

export enum ImageCropFocus {
    Attention = "ATTENTION",
    Center = "CENTER",
    East = "EAST",
    Entropy = "ENTROPY",
    North = "NORTH",
    Northeast = "NORTHEAST",
    Northwest = "NORTHWEST",
    South = "SOUTH",
    Southeast = "SOUTHEAST",
    Southwest = "SOUTHWEST",
    West = "WEST",
}

export enum ImageFit {
    Contain = "CONTAIN",
    Cover = "COVER",
    Fill = "FILL",
    Inside = "INSIDE",
    Outside = "OUTSIDE",
}

export enum ImageFormat {
    Auto = "AUTO",
    Avif = "AVIF",
    Jpg = "JPG",
    NoChange = "NO_CHANGE",
    Png = "PNG",
    Webp = "WEBP",
}

export enum ImageLayout {
    Constrained = "CONSTRAINED",
    Fixed = "FIXED",
    FullWidth = "FULL_WIDTH",
}

export enum ImagePlaceholder {
    Blurred = "BLURRED",
    DominantColor = "DOMINANT_COLOR",
    None = "NONE",
    TracedSvg = "TRACED_SVG",
}

export enum ImageResizingBehavior {
    Crop = "CROP",
    Fill = "FILL",
    NoChange = "NO_CHANGE",
    Pad = "PAD",
    Scale = "SCALE",
    Thumb = "THUMB",
}

export type ImageSharp = Node & {
    __typename?: "ImageSharp";
    children: Array<Node>;
    fixed?: Maybe<ImageSharpFixed>;
    fluid?: Maybe<ImageSharpFluid>;
    gatsbyImageData: Scalars["JSON"];
    id: Scalars["ID"];
    internal: Internal;
    original?: Maybe<ImageSharpOriginal>;
    parent?: Maybe<Node>;
    resize?: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
    background?: InputMaybe<Scalars["String"]>;
    base64Width?: InputMaybe<Scalars["Int"]>;
    cropFocus?: InputMaybe<ImageCropFocus>;
    duotone?: InputMaybe<DuotoneGradient>;
    fit?: InputMaybe<ImageFit>;
    grayscale?: InputMaybe<Scalars["Boolean"]>;
    height?: InputMaybe<Scalars["Int"]>;
    jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
    jpegQuality?: InputMaybe<Scalars["Int"]>;
    pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
    pngQuality?: InputMaybe<Scalars["Int"]>;
    quality?: InputMaybe<Scalars["Int"]>;
    rotate?: InputMaybe<Scalars["Int"]>;
    toFormat?: InputMaybe<ImageFormat>;
    toFormatBase64?: InputMaybe<ImageFormat>;
    traceSVG?: InputMaybe<Potrace>;
    trim?: InputMaybe<Scalars["Float"]>;
    webpQuality?: InputMaybe<Scalars["Int"]>;
    width?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpFluidArgs = {
    background?: InputMaybe<Scalars["String"]>;
    base64Width?: InputMaybe<Scalars["Int"]>;
    cropFocus?: InputMaybe<ImageCropFocus>;
    duotone?: InputMaybe<DuotoneGradient>;
    fit?: InputMaybe<ImageFit>;
    grayscale?: InputMaybe<Scalars["Boolean"]>;
    jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
    jpegQuality?: InputMaybe<Scalars["Int"]>;
    maxHeight?: InputMaybe<Scalars["Int"]>;
    maxWidth?: InputMaybe<Scalars["Int"]>;
    pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
    pngQuality?: InputMaybe<Scalars["Int"]>;
    quality?: InputMaybe<Scalars["Int"]>;
    rotate?: InputMaybe<Scalars["Int"]>;
    sizes?: InputMaybe<Scalars["String"]>;
    srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    toFormat?: InputMaybe<ImageFormat>;
    toFormatBase64?: InputMaybe<ImageFormat>;
    traceSVG?: InputMaybe<Potrace>;
    trim?: InputMaybe<Scalars["Float"]>;
    webpQuality?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpGatsbyImageDataArgs = {
    aspectRatio?: InputMaybe<Scalars["Float"]>;
    avifOptions?: InputMaybe<AvifOptions>;
    backgroundColor?: InputMaybe<Scalars["String"]>;
    blurredOptions?: InputMaybe<BlurredOptions>;
    breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
    height?: InputMaybe<Scalars["Int"]>;
    jpgOptions?: InputMaybe<JpgOptions>;
    layout?: InputMaybe<ImageLayout>;
    outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
    placeholder?: InputMaybe<ImagePlaceholder>;
    pngOptions?: InputMaybe<PngOptions>;
    quality?: InputMaybe<Scalars["Int"]>;
    sizes?: InputMaybe<Scalars["String"]>;
    tracedSVGOptions?: InputMaybe<Potrace>;
    transformOptions?: InputMaybe<TransformOptions>;
    webpOptions?: InputMaybe<WebPOptions>;
    width?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpResizeArgs = {
    background?: InputMaybe<Scalars["String"]>;
    base64?: InputMaybe<Scalars["Boolean"]>;
    cropFocus?: InputMaybe<ImageCropFocus>;
    duotone?: InputMaybe<DuotoneGradient>;
    fit?: InputMaybe<ImageFit>;
    grayscale?: InputMaybe<Scalars["Boolean"]>;
    height?: InputMaybe<Scalars["Int"]>;
    jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
    jpegQuality?: InputMaybe<Scalars["Int"]>;
    pngCompressionLevel?: InputMaybe<Scalars["Int"]>;
    pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
    pngQuality?: InputMaybe<Scalars["Int"]>;
    quality?: InputMaybe<Scalars["Int"]>;
    rotate?: InputMaybe<Scalars["Int"]>;
    toFormat?: InputMaybe<ImageFormat>;
    traceSVG?: InputMaybe<Potrace>;
    trim?: InputMaybe<Scalars["Float"]>;
    webpQuality?: InputMaybe<Scalars["Int"]>;
    width?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpConnection = {
    __typename?: "ImageSharpConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<ImageSharpEdge>;
    group: Array<ImageSharpGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type ImageSharpConnectionDistinctArgs = {
    field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
    field: ImageSharpFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpConnectionMaxArgs = {
    field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMinArgs = {
    field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionSumArgs = {
    field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
    __typename?: "ImageSharpEdge";
    next?: Maybe<ImageSharp>;
    node: ImageSharp;
    previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    Children = "children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildren = "children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenChildren = "children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenChildrenId = "children___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenId = "children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalContent = "children___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenInternalType = "children___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenParentChildren = "children___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenChildrenParentId = "children___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenId = "children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalContent = "children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalDescription = "children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalMediaType = "children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalOwner = "children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenInternalType = "children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentChildren = "children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentChildrenChildren = "children___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentChildrenId = "children___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentId = "children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalContent = "children___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalDescription = "children___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentInternalType = "children___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentParentChildren = "children___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ChildrenParentParentId = "children___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedAspectRatio = "fixed___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedBase64 = "fixed___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedHeight = "fixed___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedOriginalName = "fixed___originalName",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedSrc = "fixed___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedSrcSet = "fixed___srcSet",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedSrcSetWebp = "fixed___srcSetWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedSrcWebp = "fixed___srcWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedTracedSvg = "fixed___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FixedWidth = "fixed___width",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidAspectRatio = "fluid___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidBase64 = "fluid___base64",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidOriginalImg = "fluid___originalImg",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidOriginalName = "fluid___originalName",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidPresentationHeight = "fluid___presentationHeight",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidPresentationWidth = "fluid___presentationWidth",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidSizes = "fluid___sizes",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidSrc = "fluid___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidSrcSet = "fluid___srcSet",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidSrcSetWebp = "fluid___srcSetWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidSrcWebp = "fluid___srcWebp",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    FluidTracedSvg = "fluid___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    GatsbyImageData = "gatsbyImageData",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    Id = "id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalContent = "internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalContentDigest = "internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalDescription = "internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalFieldOwners = "internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalIgnoreType = "internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalMediaType = "internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalOwner = "internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    InternalType = "internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    OriginalHeight = "original___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    OriginalSrc = "original___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    OriginalWidth = "original___width",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildren = "parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenChildren = "parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenChildrenChildren = "parent___children___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenChildrenId = "parent___children___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenId = "parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalContent = "parent___children___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalDescription = "parent___children___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenInternalType = "parent___children___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenParentChildren = "parent___children___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentChildrenParentId = "parent___children___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentId = "parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalContent = "parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalContentDigest = "parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalDescription = "parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalMediaType = "parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalOwner = "parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentInternalType = "parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentChildren = "parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentChildrenChildren = "parent___parent___children___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentChildrenId = "parent___parent___children___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentId = "parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalContent = "parent___parent___internal___content",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalDescription = "parent___parent___internal___description",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalOwner = "parent___parent___internal___owner",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentInternalType = "parent___parent___internal___type",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentParentChildren = "parent___parent___parent___children",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ParentParentParentId = "parent___parent___parent___id",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ResizeAspectRatio = "resize___aspectRatio",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ResizeHeight = "resize___height",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ResizeOriginalName = "resize___originalName",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ResizeSrc = "resize___src",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ResizeTracedSvg = "resize___tracedSVG",
    /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
    ResizeWidth = "resize___width",
}

export type ImageSharpFilterInput = {
    children?: InputMaybe<NodeFilterListInput>;
    fixed?: InputMaybe<ImageSharpFixedFilterInput>;
    fluid?: InputMaybe<ImageSharpFluidFilterInput>;
    gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    original?: InputMaybe<ImageSharpOriginalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
    resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
    elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
    __typename?: "ImageSharpFixed";
    aspectRatio?: Maybe<Scalars["Float"]>;
    base64?: Maybe<Scalars["String"]>;
    height: Scalars["Float"];
    originalName?: Maybe<Scalars["String"]>;
    src: Scalars["String"];
    srcSet: Scalars["String"];
    srcSetWebp?: Maybe<Scalars["String"]>;
    srcWebp?: Maybe<Scalars["String"]>;
    tracedSVG?: Maybe<Scalars["String"]>;
    width: Scalars["Float"];
};

export type ImageSharpFixedFilterInput = {
    aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
    base64?: InputMaybe<StringQueryOperatorInput>;
    height?: InputMaybe<FloatQueryOperatorInput>;
    originalName?: InputMaybe<StringQueryOperatorInput>;
    src?: InputMaybe<StringQueryOperatorInput>;
    srcSet?: InputMaybe<StringQueryOperatorInput>;
    srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
    srcWebp?: InputMaybe<StringQueryOperatorInput>;
    tracedSVG?: InputMaybe<StringQueryOperatorInput>;
    width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
    __typename?: "ImageSharpFluid";
    aspectRatio: Scalars["Float"];
    base64?: Maybe<Scalars["String"]>;
    originalImg?: Maybe<Scalars["String"]>;
    originalName?: Maybe<Scalars["String"]>;
    presentationHeight: Scalars["Int"];
    presentationWidth: Scalars["Int"];
    sizes: Scalars["String"];
    src: Scalars["String"];
    srcSet: Scalars["String"];
    srcSetWebp?: Maybe<Scalars["String"]>;
    srcWebp?: Maybe<Scalars["String"]>;
    tracedSVG?: Maybe<Scalars["String"]>;
};

export type ImageSharpFluidFilterInput = {
    aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
    base64?: InputMaybe<StringQueryOperatorInput>;
    originalImg?: InputMaybe<StringQueryOperatorInput>;
    originalName?: InputMaybe<StringQueryOperatorInput>;
    presentationHeight?: InputMaybe<IntQueryOperatorInput>;
    presentationWidth?: InputMaybe<IntQueryOperatorInput>;
    sizes?: InputMaybe<StringQueryOperatorInput>;
    src?: InputMaybe<StringQueryOperatorInput>;
    srcSet?: InputMaybe<StringQueryOperatorInput>;
    srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
    srcWebp?: InputMaybe<StringQueryOperatorInput>;
    tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
    __typename?: "ImageSharpGroupConnection";
    edges: Array<ImageSharpEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type ImageSharpOriginal = {
    __typename?: "ImageSharpOriginal";
    height?: Maybe<Scalars["Float"]>;
    src?: Maybe<Scalars["String"]>;
    width?: Maybe<Scalars["Float"]>;
};

export type ImageSharpOriginalFilterInput = {
    height?: InputMaybe<FloatQueryOperatorInput>;
    src?: InputMaybe<StringQueryOperatorInput>;
    width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
    __typename?: "ImageSharpResize";
    aspectRatio?: Maybe<Scalars["Float"]>;
    height?: Maybe<Scalars["Int"]>;
    originalName?: Maybe<Scalars["String"]>;
    src?: Maybe<Scalars["String"]>;
    tracedSVG?: Maybe<Scalars["String"]>;
    width?: Maybe<Scalars["Int"]>;
};

export type ImageSharpResizeFilterInput = {
    aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
    height?: InputMaybe<IntQueryOperatorInput>;
    originalName?: InputMaybe<StringQueryOperatorInput>;
    src?: InputMaybe<StringQueryOperatorInput>;
    tracedSVG?: InputMaybe<StringQueryOperatorInput>;
    width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
    fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
    eq?: InputMaybe<Scalars["Int"]>;
    gt?: InputMaybe<Scalars["Int"]>;
    gte?: InputMaybe<Scalars["Int"]>;
    in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    lt?: InputMaybe<Scalars["Int"]>;
    lte?: InputMaybe<Scalars["Int"]>;
    ne?: InputMaybe<Scalars["Int"]>;
    nin?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type Internal = {
    __typename?: "Internal";
    content?: Maybe<Scalars["String"]>;
    contentDigest: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>;
    ignoreType?: Maybe<Scalars["Boolean"]>;
    mediaType?: Maybe<Scalars["String"]>;
    owner: Scalars["String"];
    type: Scalars["String"];
};

export type InternalFilterInput = {
    content?: InputMaybe<StringQueryOperatorInput>;
    contentDigest?: InputMaybe<StringQueryOperatorInput>;
    description?: InputMaybe<StringQueryOperatorInput>;
    fieldOwners?: InputMaybe<StringQueryOperatorInput>;
    ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
    mediaType?: InputMaybe<StringQueryOperatorInput>;
    owner?: InputMaybe<StringQueryOperatorInput>;
    type?: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
    progressive?: InputMaybe<Scalars["Boolean"]>;
    quality?: InputMaybe<Scalars["Int"]>;
};

export type JsonQueryOperatorInput = {
    eq?: InputMaybe<Scalars["JSON"]>;
    glob?: InputMaybe<Scalars["JSON"]>;
    in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
    ne?: InputMaybe<Scalars["JSON"]>;
    nin?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
    regex?: InputMaybe<Scalars["JSON"]>;
};

export type Node = {
    children: Array<Node>;
    id: Scalars["ID"];
    internal: Internal;
    parent?: Maybe<Node>;
};

export type NodeFilterInput = {
    children?: InputMaybe<NodeFilterListInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
    elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
    compressionSpeed?: InputMaybe<Scalars["Int"]>;
    quality?: InputMaybe<Scalars["Int"]>;
};

export type PageInfo = {
    __typename?: "PageInfo";
    currentPage: Scalars["Int"];
    hasNextPage: Scalars["Boolean"];
    hasPreviousPage: Scalars["Boolean"];
    itemCount: Scalars["Int"];
    pageCount: Scalars["Int"];
    perPage?: Maybe<Scalars["Int"]>;
    totalCount: Scalars["Int"];
};

export type Potrace = {
    alphaMax?: InputMaybe<Scalars["Float"]>;
    background?: InputMaybe<Scalars["String"]>;
    blackOnWhite?: InputMaybe<Scalars["Boolean"]>;
    color?: InputMaybe<Scalars["String"]>;
    optCurve?: InputMaybe<Scalars["Boolean"]>;
    optTolerance?: InputMaybe<Scalars["Float"]>;
    threshold?: InputMaybe<Scalars["Int"]>;
    turdSize?: InputMaybe<Scalars["Float"]>;
    turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
    TurnpolicyBlack = "TURNPOLICY_BLACK",
    TurnpolicyLeft = "TURNPOLICY_LEFT",
    TurnpolicyMajority = "TURNPOLICY_MAJORITY",
    TurnpolicyMinority = "TURNPOLICY_MINORITY",
    TurnpolicyRight = "TURNPOLICY_RIGHT",
    TurnpolicyWhite = "TURNPOLICY_WHITE",
}

export type Query = {
    __typename?: "Query";
    allContentfulAsset: ContentfulAssetConnection;
    allContentfulContentType: ContentfulContentTypeConnection;
    allContentfulEntry: ContentfulEntryConnection;
    allContentfulProjects: ContentfulProjectsConnection;
    allContentfulProjectsConclusionTextNode: ContentfulProjectsConclusionTextNodeConnection;
    allContentfulProjectsContentJsonNode: ContentfulProjectsContentJsonNodeConnection;
    allContentfulProjectsDescriptionTextNode: ContentfulProjectsDescriptionTextNodeConnection;
    allContentfulProjectsLessonTextNode: ContentfulProjectsLessonTextNodeConnection;
    allContentfulProjectsResumeTextNode: ContentfulProjectsResumeTextNodeConnection;
    allContentfulProjectsUsedTextNode: ContentfulProjectsUsedTextNodeConnection;
    allDirectory: DirectoryConnection;
    allFile: FileConnection;
    allImageSharp: ImageSharpConnection;
    allSite: SiteConnection;
    allSiteBuildMetadata: SiteBuildMetadataConnection;
    allSiteFunction: SiteFunctionConnection;
    allSitePage: SitePageConnection;
    allSitePlugin: SitePluginConnection;
    contentfulAsset?: Maybe<ContentfulAsset>;
    contentfulContentType?: Maybe<ContentfulContentType>;
    contentfulEntry?: Maybe<ContentfulEntry>;
    contentfulProjects?: Maybe<ContentfulProjects>;
    contentfulProjectsConclusionTextNode?: Maybe<ContentfulProjectsConclusionTextNode>;
    contentfulProjectsContentJsonNode?: Maybe<ContentfulProjectsContentJsonNode>;
    contentfulProjectsDescriptionTextNode?: Maybe<ContentfulProjectsDescriptionTextNode>;
    contentfulProjectsLessonTextNode?: Maybe<ContentfulProjectsLessonTextNode>;
    contentfulProjectsResumeTextNode?: Maybe<ContentfulProjectsResumeTextNode>;
    contentfulProjectsUsedTextNode?: Maybe<ContentfulProjectsUsedTextNode>;
    directory?: Maybe<Directory>;
    file?: Maybe<File>;
    imageSharp?: Maybe<ImageSharp>;
    site?: Maybe<Site>;
    siteBuildMetadata?: Maybe<SiteBuildMetadata>;
    siteFunction?: Maybe<SiteFunction>;
    sitePage?: Maybe<SitePage>;
    sitePlugin?: Maybe<SitePlugin>;
};

export type QueryAllContentfulAssetArgs = {
    filter?: InputMaybe<ContentfulAssetFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<ContentfulAssetSortInput>;
};

export type QueryAllContentfulContentTypeArgs = {
    filter?: InputMaybe<ContentfulContentTypeFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<ContentfulContentTypeSortInput>;
};

export type QueryAllContentfulEntryArgs = {
    filter?: InputMaybe<ContentfulEntryFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<ContentfulEntrySortInput>;
};

export type QueryAllContentfulProjectsArgs = {
    filter?: InputMaybe<ContentfulProjectsFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<ContentfulProjectsSortInput>;
};

export type QueryAllContentfulProjectsConclusionTextNodeArgs = {
    filter?: InputMaybe<ContentfulProjectsConclusionTextNodeFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<ContentfulProjectsConclusionTextNodeSortInput>;
};

export type QueryAllContentfulProjectsContentJsonNodeArgs = {
    filter?: InputMaybe<ContentfulProjectsContentJsonNodeFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<ContentfulProjectsContentJsonNodeSortInput>;
};

export type QueryAllContentfulProjectsDescriptionTextNodeArgs = {
    filter?: InputMaybe<ContentfulProjectsDescriptionTextNodeFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<ContentfulProjectsDescriptionTextNodeSortInput>;
};

export type QueryAllContentfulProjectsLessonTextNodeArgs = {
    filter?: InputMaybe<ContentfulProjectsLessonTextNodeFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<ContentfulProjectsLessonTextNodeSortInput>;
};

export type QueryAllContentfulProjectsResumeTextNodeArgs = {
    filter?: InputMaybe<ContentfulProjectsResumeTextNodeFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<ContentfulProjectsResumeTextNodeSortInput>;
};

export type QueryAllContentfulProjectsUsedTextNodeArgs = {
    filter?: InputMaybe<ContentfulProjectsUsedTextNodeFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<ContentfulProjectsUsedTextNodeSortInput>;
};

export type QueryAllDirectoryArgs = {
    filter?: InputMaybe<DirectoryFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<DirectorySortInput>;
};

export type QueryAllFileArgs = {
    filter?: InputMaybe<FileFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<FileSortInput>;
};

export type QueryAllImageSharpArgs = {
    filter?: InputMaybe<ImageSharpFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<ImageSharpSortInput>;
};

export type QueryAllSiteArgs = {
    filter?: InputMaybe<SiteFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<SiteSortInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
    filter?: InputMaybe<SiteBuildMetadataFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<SiteBuildMetadataSortInput>;
};

export type QueryAllSiteFunctionArgs = {
    filter?: InputMaybe<SiteFunctionFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<SiteFunctionSortInput>;
};

export type QueryAllSitePageArgs = {
    filter?: InputMaybe<SitePageFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<SitePageSortInput>;
};

export type QueryAllSitePluginArgs = {
    filter?: InputMaybe<SitePluginFilterInput>;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<SitePluginSortInput>;
};

export type QueryContentfulAssetArgs = {
    children?: InputMaybe<NodeFilterListInput>;
    contentful_id?: InputMaybe<StringQueryOperatorInput>;
    createdAt?: InputMaybe<DateQueryOperatorInput>;
    description?: InputMaybe<StringQueryOperatorInput>;
    file?: InputMaybe<ContentfulAssetFileFilterInput>;
    fixed?: InputMaybe<ContentfulFixedFilterInput>;
    fluid?: InputMaybe<ContentfulFluidFilterInput>;
    gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    node_locale?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    resize?: InputMaybe<ContentfulResizeFilterInput>;
    spaceId?: InputMaybe<StringQueryOperatorInput>;
    sys?: InputMaybe<ContentfulAssetSysFilterInput>;
    title?: InputMaybe<StringQueryOperatorInput>;
    updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type QueryContentfulContentTypeArgs = {
    children?: InputMaybe<NodeFilterListInput>;
    description?: InputMaybe<StringQueryOperatorInput>;
    displayField?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type QueryContentfulEntryArgs = {
    children?: InputMaybe<NodeFilterListInput>;
    contentful_id?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    node_locale?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
};

export type QueryContentfulProjectsArgs = {
    aboutImages?: InputMaybe<ContentfulAssetFilterListInput>;
    childContentfulProjectsConclusionTextNode?: InputMaybe<ContentfulProjectsConclusionTextNodeFilterInput>;
    childContentfulProjectsContentJsonNode?: InputMaybe<ContentfulProjectsContentJsonNodeFilterInput>;
    childContentfulProjectsDescriptionTextNode?: InputMaybe<ContentfulProjectsDescriptionTextNodeFilterInput>;
    childContentfulProjectsLessonTextNode?: InputMaybe<ContentfulProjectsLessonTextNodeFilterInput>;
    childContentfulProjectsResumeTextNode?: InputMaybe<ContentfulProjectsResumeTextNodeFilterInput>;
    childContentfulProjectsUsedTextNode?: InputMaybe<ContentfulProjectsUsedTextNodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    childrenContentfulProjectsConclusionTextNode?: InputMaybe<ContentfulProjectsConclusionTextNodeFilterListInput>;
    childrenContentfulProjectsContentJsonNode?: InputMaybe<ContentfulProjectsContentJsonNodeFilterListInput>;
    childrenContentfulProjectsDescriptionTextNode?: InputMaybe<ContentfulProjectsDescriptionTextNodeFilterListInput>;
    childrenContentfulProjectsLessonTextNode?: InputMaybe<ContentfulProjectsLessonTextNodeFilterListInput>;
    childrenContentfulProjectsResumeTextNode?: InputMaybe<ContentfulProjectsResumeTextNodeFilterListInput>;
    childrenContentfulProjectsUsedTextNode?: InputMaybe<ContentfulProjectsUsedTextNodeFilterListInput>;
    conclusion?: InputMaybe<ContentfulProjectsConclusionTextNodeFilterInput>;
    content?: InputMaybe<ContentfulProjectsContentJsonNodeFilterInput>;
    contentful_id?: InputMaybe<StringQueryOperatorInput>;
    core?: InputMaybe<ContentfulProjectsCoreFilterInput>;
    createdAt?: InputMaybe<DateQueryOperatorInput>;
    date?: InputMaybe<DateQueryOperatorInput>;
    description?: InputMaybe<ContentfulProjectsDescriptionTextNodeFilterInput>;
    gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    isFreelanceWork?: InputMaybe<BooleanQueryOperatorInput>;
    lesson?: InputMaybe<ContentfulProjectsLessonTextNodeFilterInput>;
    node_locale?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    resume?: InputMaybe<ContentfulProjectsResumeTextNodeFilterInput>;
    role?: InputMaybe<StringQueryOperatorInput>;
    spaceId?: InputMaybe<StringQueryOperatorInput>;
    sys?: InputMaybe<ContentfulProjectsSysFilterInput>;
    team?: InputMaybe<StringQueryOperatorInput>;
    teamStack?: InputMaybe<StringQueryOperatorInput>;
    thumbnail?: InputMaybe<ContentfulAssetFilterInput>;
    timeline?: InputMaybe<StringQueryOperatorInput>;
    title?: InputMaybe<StringQueryOperatorInput>;
    updatedAt?: InputMaybe<DateQueryOperatorInput>;
    used?: InputMaybe<ContentfulProjectsUsedTextNodeFilterInput>;
};

export type QueryContentfulProjectsConclusionTextNodeArgs = {
    children?: InputMaybe<NodeFilterListInput>;
    conclusion?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
    sys?: InputMaybe<ContentfulProjectsConclusionTextNodeSysFilterInput>;
};

export type QueryContentfulProjectsContentJsonNodeArgs = {
    app_link?: InputMaybe<StringQueryOperatorInput>;
    children?: InputMaybe<NodeFilterListInput>;
    github_link?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
    stacks?: InputMaybe<StringQueryOperatorInput>;
    sys?: InputMaybe<ContentfulProjectsContentJsonNodeSysFilterInput>;
    tags?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryContentfulProjectsDescriptionTextNodeArgs = {
    children?: InputMaybe<NodeFilterListInput>;
    description?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
    sys?: InputMaybe<ContentfulProjectsDescriptionTextNodeSysFilterInput>;
};

export type QueryContentfulProjectsLessonTextNodeArgs = {
    children?: InputMaybe<NodeFilterListInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    lesson?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    sys?: InputMaybe<ContentfulProjectsLessonTextNodeSysFilterInput>;
};

export type QueryContentfulProjectsResumeTextNodeArgs = {
    children?: InputMaybe<NodeFilterListInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
    resume?: InputMaybe<StringQueryOperatorInput>;
    sys?: InputMaybe<ContentfulProjectsResumeTextNodeSysFilterInput>;
};

export type QueryContentfulProjectsUsedTextNodeArgs = {
    children?: InputMaybe<NodeFilterListInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
    sys?: InputMaybe<ContentfulProjectsUsedTextNodeSysFilterInput>;
    used?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryDirectoryArgs = {
    absolutePath?: InputMaybe<StringQueryOperatorInput>;
    accessTime?: InputMaybe<DateQueryOperatorInput>;
    atime?: InputMaybe<DateQueryOperatorInput>;
    atimeMs?: InputMaybe<FloatQueryOperatorInput>;
    base?: InputMaybe<StringQueryOperatorInput>;
    birthTime?: InputMaybe<DateQueryOperatorInput>;
    birthtime?: InputMaybe<DateQueryOperatorInput>;
    birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
    blksize?: InputMaybe<IntQueryOperatorInput>;
    blocks?: InputMaybe<IntQueryOperatorInput>;
    changeTime?: InputMaybe<DateQueryOperatorInput>;
    children?: InputMaybe<NodeFilterListInput>;
    ctime?: InputMaybe<DateQueryOperatorInput>;
    ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
    dev?: InputMaybe<IntQueryOperatorInput>;
    dir?: InputMaybe<StringQueryOperatorInput>;
    ext?: InputMaybe<StringQueryOperatorInput>;
    extension?: InputMaybe<StringQueryOperatorInput>;
    gid?: InputMaybe<IntQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    ino?: InputMaybe<FloatQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    mode?: InputMaybe<IntQueryOperatorInput>;
    modifiedTime?: InputMaybe<DateQueryOperatorInput>;
    mtime?: InputMaybe<DateQueryOperatorInput>;
    mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
    nlink?: InputMaybe<IntQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    prettySize?: InputMaybe<StringQueryOperatorInput>;
    rdev?: InputMaybe<IntQueryOperatorInput>;
    relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
    relativePath?: InputMaybe<StringQueryOperatorInput>;
    root?: InputMaybe<StringQueryOperatorInput>;
    size?: InputMaybe<IntQueryOperatorInput>;
    sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
    uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
    absolutePath?: InputMaybe<StringQueryOperatorInput>;
    accessTime?: InputMaybe<DateQueryOperatorInput>;
    atime?: InputMaybe<DateQueryOperatorInput>;
    atimeMs?: InputMaybe<FloatQueryOperatorInput>;
    base?: InputMaybe<StringQueryOperatorInput>;
    birthTime?: InputMaybe<DateQueryOperatorInput>;
    birthtime?: InputMaybe<DateQueryOperatorInput>;
    birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
    blksize?: InputMaybe<IntQueryOperatorInput>;
    blocks?: InputMaybe<IntQueryOperatorInput>;
    changeTime?: InputMaybe<DateQueryOperatorInput>;
    childImageSharp?: InputMaybe<ImageSharpFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
    ctime?: InputMaybe<DateQueryOperatorInput>;
    ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
    dev?: InputMaybe<IntQueryOperatorInput>;
    dir?: InputMaybe<StringQueryOperatorInput>;
    ext?: InputMaybe<StringQueryOperatorInput>;
    extension?: InputMaybe<StringQueryOperatorInput>;
    gid?: InputMaybe<IntQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    ino?: InputMaybe<FloatQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    mode?: InputMaybe<IntQueryOperatorInput>;
    modifiedTime?: InputMaybe<DateQueryOperatorInput>;
    mtime?: InputMaybe<DateQueryOperatorInput>;
    mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
    nlink?: InputMaybe<IntQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    prettySize?: InputMaybe<StringQueryOperatorInput>;
    publicURL?: InputMaybe<StringQueryOperatorInput>;
    rdev?: InputMaybe<IntQueryOperatorInput>;
    relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
    relativePath?: InputMaybe<StringQueryOperatorInput>;
    root?: InputMaybe<StringQueryOperatorInput>;
    size?: InputMaybe<IntQueryOperatorInput>;
    sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
    uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryImageSharpArgs = {
    children?: InputMaybe<NodeFilterListInput>;
    fixed?: InputMaybe<ImageSharpFixedFilterInput>;
    fluid?: InputMaybe<ImageSharpFluidFilterInput>;
    gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    original?: InputMaybe<ImageSharpOriginalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
    resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type QuerySiteArgs = {
    buildTime?: InputMaybe<DateQueryOperatorInput>;
    children?: InputMaybe<NodeFilterListInput>;
    host?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
    pathPrefix?: InputMaybe<StringQueryOperatorInput>;
    polyfill?: InputMaybe<BooleanQueryOperatorInput>;
    port?: InputMaybe<IntQueryOperatorInput>;
    siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type QuerySiteBuildMetadataArgs = {
    buildTime?: InputMaybe<DateQueryOperatorInput>;
    children?: InputMaybe<NodeFilterListInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
    absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
    children?: InputMaybe<NodeFilterListInput>;
    functionRoute?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    matchPath?: InputMaybe<StringQueryOperatorInput>;
    originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
    originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    pluginName?: InputMaybe<StringQueryOperatorInput>;
    relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
    children?: InputMaybe<NodeFilterListInput>;
    component?: InputMaybe<StringQueryOperatorInput>;
    componentChunkName?: InputMaybe<StringQueryOperatorInput>;
    context?: InputMaybe<SitePageContextFilterInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    internalComponentName?: InputMaybe<StringQueryOperatorInput>;
    isCreatedByStatefulCreatePages?: InputMaybe<BooleanQueryOperatorInput>;
    matchPath?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    path?: InputMaybe<StringQueryOperatorInput>;
    pluginCreator?: InputMaybe<SitePluginFilterInput>;
    pluginCreatorId?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySitePluginArgs = {
    browserAPIs?: InputMaybe<StringQueryOperatorInput>;
    children?: InputMaybe<NodeFilterListInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
    nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
    packageJson?: InputMaybe<SitePluginPackageJsonFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
    pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
    pluginOptions?: InputMaybe<SitePluginPluginOptionsFilterInput>;
    resolve?: InputMaybe<StringQueryOperatorInput>;
    ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
    version?: InputMaybe<StringQueryOperatorInput>;
};

export type Site = Node & {
    __typename?: "Site";
    buildTime?: Maybe<Scalars["Date"]>;
    children: Array<Node>;
    host?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    internal: Internal;
    parent?: Maybe<Node>;
    pathPrefix?: Maybe<Scalars["String"]>;
    polyfill?: Maybe<Scalars["Boolean"]>;
    port?: Maybe<Scalars["Int"]>;
    siteMetadata?: Maybe<SiteSiteMetadata>;
};

export type SiteBuildTimeArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
    __typename?: "SiteBuildMetadata";
    buildTime?: Maybe<Scalars["Date"]>;
    children: Array<Node>;
    id: Scalars["ID"];
    internal: Internal;
    parent?: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
    difference?: InputMaybe<Scalars["String"]>;
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    locale?: InputMaybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
    __typename?: "SiteBuildMetadataConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<SiteBuildMetadataEdge>;
    group: Array<SiteBuildMetadataGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<SiteBuildMetadata>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
    field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
    field: SiteBuildMetadataFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteBuildMetadataConnectionMaxArgs = {
    field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
    field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
    field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
    __typename?: "SiteBuildMetadataEdge";
    next?: Maybe<SiteBuildMetadata>;
    node: SiteBuildMetadata;
    previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
    BuildTime = "buildTime",
    Children = "children",
    ChildrenChildren = "children___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenId = "children___id",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentParentId = "children___parent___parent___id",
    Id = "id",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    ParentChildren = "parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenId = "parent___children___id",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentId = "parent___id",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentId = "parent___parent___id",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentParentId = "parent___parent___parent___id",
}

export type SiteBuildMetadataFilterInput = {
    buildTime?: InputMaybe<DateQueryOperatorInput>;
    children?: InputMaybe<NodeFilterListInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
    __typename?: "SiteBuildMetadataGroupConnection";
    edges: Array<SiteBuildMetadataEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<SiteBuildMetadata>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type SiteBuildMetadataSortInput = {
    fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
    __typename?: "SiteConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<SiteEdge>;
    group: Array<SiteGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type SiteConnectionDistinctArgs = {
    field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
    field: SiteFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteConnectionMaxArgs = {
    field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
    field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
    field: SiteFieldsEnum;
};

export type SiteEdge = {
    __typename?: "SiteEdge";
    next?: Maybe<Site>;
    node: Site;
    previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
    BuildTime = "buildTime",
    Children = "children",
    ChildrenChildren = "children___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenId = "children___id",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentParentId = "children___parent___parent___id",
    Host = "host",
    Id = "id",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    ParentChildren = "parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenId = "parent___children___id",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentId = "parent___id",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentId = "parent___parent___id",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentParentId = "parent___parent___parent___id",
    PathPrefix = "pathPrefix",
    Polyfill = "polyfill",
    Port = "port",
    SiteMetadataDescription = "siteMetadata___description",
    SiteMetadataImage = "siteMetadata___image",
    SiteMetadataTitle = "siteMetadata___title",
    SiteMetadataTitleTemplate = "siteMetadata___titleTemplate",
    SiteMetadataTwitterUsername = "siteMetadata___twitterUsername",
    SiteMetadataUrl = "siteMetadata___url",
}

export type SiteFilterInput = {
    buildTime?: InputMaybe<DateQueryOperatorInput>;
    children?: InputMaybe<NodeFilterListInput>;
    host?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
    pathPrefix?: InputMaybe<StringQueryOperatorInput>;
    polyfill?: InputMaybe<BooleanQueryOperatorInput>;
    port?: InputMaybe<IntQueryOperatorInput>;
    siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
    __typename?: "SiteFunction";
    absoluteCompiledFilePath: Scalars["String"];
    children: Array<Node>;
    functionRoute: Scalars["String"];
    id: Scalars["ID"];
    internal: Internal;
    matchPath?: Maybe<Scalars["String"]>;
    originalAbsoluteFilePath: Scalars["String"];
    originalRelativeFilePath: Scalars["String"];
    parent?: Maybe<Node>;
    pluginName: Scalars["String"];
    relativeCompiledFilePath: Scalars["String"];
};

export type SiteFunctionConnection = {
    __typename?: "SiteFunctionConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<SiteFunctionEdge>;
    group: Array<SiteFunctionGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<SiteFunction>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type SiteFunctionConnectionDistinctArgs = {
    field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
    field: SiteFunctionFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteFunctionConnectionMaxArgs = {
    field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
    field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
    field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
    __typename?: "SiteFunctionEdge";
    next?: Maybe<SiteFunction>;
    node: SiteFunction;
    previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
    AbsoluteCompiledFilePath = "absoluteCompiledFilePath",
    Children = "children",
    ChildrenChildren = "children___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenId = "children___id",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentParentId = "children___parent___parent___id",
    FunctionRoute = "functionRoute",
    Id = "id",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    MatchPath = "matchPath",
    OriginalAbsoluteFilePath = "originalAbsoluteFilePath",
    OriginalRelativeFilePath = "originalRelativeFilePath",
    ParentChildren = "parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenId = "parent___children___id",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentId = "parent___id",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentId = "parent___parent___id",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentParentId = "parent___parent___parent___id",
    PluginName = "pluginName",
    RelativeCompiledFilePath = "relativeCompiledFilePath",
}

export type SiteFunctionFilterInput = {
    absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
    children?: InputMaybe<NodeFilterListInput>;
    functionRoute?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    matchPath?: InputMaybe<StringQueryOperatorInput>;
    originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
    originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    pluginName?: InputMaybe<StringQueryOperatorInput>;
    relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
    __typename?: "SiteFunctionGroupConnection";
    edges: Array<SiteFunctionEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<SiteFunction>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type SiteFunctionSortInput = {
    fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
    __typename?: "SiteGroupConnection";
    edges: Array<SiteEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type SitePage = Node & {
    __typename?: "SitePage";
    children: Array<Node>;
    component: Scalars["String"];
    componentChunkName: Scalars["String"];
    context?: Maybe<SitePageContext>;
    id: Scalars["ID"];
    internal: Internal;
    internalComponentName: Scalars["String"];
    isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>;
    matchPath?: Maybe<Scalars["String"]>;
    parent?: Maybe<Node>;
    path: Scalars["String"];
    pluginCreator?: Maybe<SitePlugin>;
    pluginCreatorId?: Maybe<Scalars["String"]>;
};

export type SitePageConnection = {
    __typename?: "SitePageConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<SitePageEdge>;
    group: Array<SitePageGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type SitePageConnectionDistinctArgs = {
    field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
    field: SitePageFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePageConnectionMaxArgs = {
    field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
    field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
    field: SitePageFieldsEnum;
};

export type SitePageContext = {
    __typename?: "SitePageContext";
    _xparams?: Maybe<SitePageContext_Xparams>;
    id?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
};

export type SitePageContextFilterInput = {
    _xparams?: InputMaybe<SitePageContext_XparamsFilterInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    title?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePageContext_Xparams = {
    __typename?: "SitePageContext_xparams";
    title?: Maybe<Scalars["String"]>;
};

export type SitePageContext_XparamsFilterInput = {
    title?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
    __typename?: "SitePageEdge";
    next?: Maybe<SitePage>;
    node: SitePage;
    previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
    Children = "children",
    ChildrenChildren = "children___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenId = "children___id",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentParentId = "children___parent___parent___id",
    Component = "component",
    ComponentChunkName = "componentChunkName",
    ContextXparamsTitle = "context____xparams___title",
    ContextId = "context___id",
    ContextTitle = "context___title",
    Id = "id",
    InternalComponentName = "internalComponentName",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    IsCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
    MatchPath = "matchPath",
    ParentChildren = "parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenId = "parent___children___id",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentId = "parent___id",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentId = "parent___parent___id",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentParentId = "parent___parent___parent___id",
    Path = "path",
    PluginCreatorId = "pluginCreatorId",
    PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
    PluginCreatorChildren = "pluginCreator___children",
    PluginCreatorChildrenChildren = "pluginCreator___children___children",
    PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
    PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
    PluginCreatorChildrenId = "pluginCreator___children___id",
    PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
    PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
    PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
    PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
    PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
    PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
    PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
    PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
    PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
    PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
    PluginCreatorInternalContent = "pluginCreator___internal___content",
    PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
    PluginCreatorInternalDescription = "pluginCreator___internal___description",
    PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
    PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
    PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
    PluginCreatorInternalOwner = "pluginCreator___internal___owner",
    PluginCreatorInternalType = "pluginCreator___internal___type",
    PluginCreatorName = "pluginCreator___name",
    PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
    PluginCreatorPackageJsonDependencies = "pluginCreator___packageJson___dependencies",
    PluginCreatorPackageJsonDependenciesName = "pluginCreator___packageJson___dependencies___name",
    PluginCreatorPackageJsonDependenciesVersion = "pluginCreator___packageJson___dependencies___version",
    PluginCreatorPackageJsonDescription = "pluginCreator___packageJson___description",
    PluginCreatorPackageJsonDevDependencies = "pluginCreator___packageJson___devDependencies",
    PluginCreatorPackageJsonDevDependenciesName = "pluginCreator___packageJson___devDependencies___name",
    PluginCreatorPackageJsonDevDependenciesVersion = "pluginCreator___packageJson___devDependencies___version",
    PluginCreatorPackageJsonKeywords = "pluginCreator___packageJson___keywords",
    PluginCreatorPackageJsonLicense = "pluginCreator___packageJson___license",
    PluginCreatorPackageJsonMain = "pluginCreator___packageJson___main",
    PluginCreatorPackageJsonName = "pluginCreator___packageJson___name",
    PluginCreatorPackageJsonPeerDependencies = "pluginCreator___packageJson___peerDependencies",
    PluginCreatorPackageJsonPeerDependenciesName = "pluginCreator___packageJson___peerDependencies___name",
    PluginCreatorPackageJsonPeerDependenciesVersion = "pluginCreator___packageJson___peerDependencies___version",
    PluginCreatorPackageJsonVersion = "pluginCreator___packageJson___version",
    PluginCreatorParentChildren = "pluginCreator___parent___children",
    PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
    PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
    PluginCreatorParentId = "pluginCreator___parent___id",
    PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
    PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
    PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
    PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
    PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
    PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
    PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
    PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
    PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
    PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
    PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
    PluginCreatorPluginOptionsAssets = "pluginCreator___pluginOptions____assets__",
    PluginCreatorPluginOptionsComponents = "pluginCreator___pluginOptions____components__",
    PluginCreatorPluginOptionsContentful = "pluginCreator___pluginOptions____contentful__",
    PluginCreatorPluginOptionsStyles = "pluginCreator___pluginOptions____styles__",
    PluginCreatorPluginOptionsAccessToken = "pluginCreator___pluginOptions___accessToken",
    PluginCreatorPluginOptionsAllExtensions = "pluginCreator___pluginOptions___allExtensions",
    PluginCreatorPluginOptionsAssetDownloadWorkers = "pluginCreator___pluginOptions___assetDownloadWorkers",
    PluginCreatorPluginOptionsBase64Width = "pluginCreator___pluginOptions___base64Width",
    PluginCreatorPluginOptionsDefaultQuality = "pluginCreator___pluginOptions___defaultQuality",
    PluginCreatorPluginOptionsDefaultsFormats = "pluginCreator___pluginOptions___defaults___formats",
    PluginCreatorPluginOptionsDefaultsPlaceholder = "pluginCreator___pluginOptions___defaults___placeholder",
    PluginCreatorPluginOptionsDefaultsQuality = "pluginCreator___pluginOptions___defaults___quality",
    PluginCreatorPluginOptionsDest = "pluginCreator___pluginOptions___dest",
    PluginCreatorPluginOptionsDisplayName = "pluginCreator___pluginOptions___displayName",
    PluginCreatorPluginOptionsDownloadLocal = "pluginCreator___pluginOptions___downloadLocal",
    PluginCreatorPluginOptionsEnvironment = "pluginCreator___pluginOptions___environment",
    PluginCreatorPluginOptionsFailOnError = "pluginCreator___pluginOptions___failOnError",
    PluginCreatorPluginOptionsFileName = "pluginCreator___pluginOptions___fileName",
    PluginCreatorPluginOptionsForceFullSync = "pluginCreator___pluginOptions___forceFullSync",
    PluginCreatorPluginOptionsHost = "pluginCreator___pluginOptions___host",
    PluginCreatorPluginOptionsIsTsx = "pluginCreator___pluginOptions___isTSX",
    PluginCreatorPluginOptionsJsxPragma = "pluginCreator___pluginOptions___jsxPragma",
    PluginCreatorPluginOptionsMinify = "pluginCreator___pluginOptions___minify",
    PluginCreatorPluginOptionsName = "pluginCreator___pluginOptions___name",
    PluginCreatorPluginOptionsNamespace = "pluginCreator___pluginOptions___namespace",
    PluginCreatorPluginOptionsPageLimit = "pluginCreator___pluginOptions___pageLimit",
    PluginCreatorPluginOptionsPath = "pluginCreator___pluginOptions___path",
    PluginCreatorPluginOptionsPathCheck = "pluginCreator___pluginOptions___pathCheck",
    PluginCreatorPluginOptionsPure = "pluginCreator___pluginOptions___pure",
    PluginCreatorPluginOptionsSpaceId = "pluginCreator___pluginOptions___spaceId",
    PluginCreatorPluginOptionsStripMetadata = "pluginCreator___pluginOptions___stripMetadata",
    PluginCreatorPluginOptionsTranspileTemplateLiterals = "pluginCreator___pluginOptions___transpileTemplateLiterals",
    PluginCreatorPluginOptionsUseNameForId = "pluginCreator___pluginOptions___useNameForId",
    PluginCreatorResolve = "pluginCreator___resolve",
    PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
    PluginCreatorVersion = "pluginCreator___version",
}

export type SitePageFilterInput = {
    children?: InputMaybe<NodeFilterListInput>;
    component?: InputMaybe<StringQueryOperatorInput>;
    componentChunkName?: InputMaybe<StringQueryOperatorInput>;
    context?: InputMaybe<SitePageContextFilterInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    internalComponentName?: InputMaybe<StringQueryOperatorInput>;
    isCreatedByStatefulCreatePages?: InputMaybe<BooleanQueryOperatorInput>;
    matchPath?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    path?: InputMaybe<StringQueryOperatorInput>;
    pluginCreator?: InputMaybe<SitePluginFilterInput>;
    pluginCreatorId?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
    __typename?: "SitePageGroupConnection";
    edges: Array<SitePageEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type SitePageSortInput = {
    fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
    __typename?: "SitePlugin";
    browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    children: Array<Node>;
    id: Scalars["ID"];
    internal: Internal;
    name?: Maybe<Scalars["String"]>;
    nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    packageJson?: Maybe<SitePluginPackageJson>;
    parent?: Maybe<Node>;
    pluginFilepath?: Maybe<Scalars["String"]>;
    pluginOptions?: Maybe<SitePluginPluginOptions>;
    resolve?: Maybe<Scalars["String"]>;
    ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    version?: Maybe<Scalars["String"]>;
};

export type SitePluginConnection = {
    __typename?: "SitePluginConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<SitePluginEdge>;
    group: Array<SitePluginGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type SitePluginConnectionDistinctArgs = {
    field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
    field: SitePluginFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePluginConnectionMaxArgs = {
    field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
    field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
    field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
    __typename?: "SitePluginEdge";
    next?: Maybe<SitePlugin>;
    node: SitePlugin;
    previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
    BrowserApIs = "browserAPIs",
    Children = "children",
    ChildrenChildren = "children___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenId = "children___id",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentParentId = "children___parent___parent___id",
    Id = "id",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    Name = "name",
    NodeApIs = "nodeAPIs",
    PackageJsonDependencies = "packageJson___dependencies",
    PackageJsonDependenciesName = "packageJson___dependencies___name",
    PackageJsonDependenciesVersion = "packageJson___dependencies___version",
    PackageJsonDescription = "packageJson___description",
    PackageJsonDevDependencies = "packageJson___devDependencies",
    PackageJsonDevDependenciesName = "packageJson___devDependencies___name",
    PackageJsonDevDependenciesVersion = "packageJson___devDependencies___version",
    PackageJsonKeywords = "packageJson___keywords",
    PackageJsonLicense = "packageJson___license",
    PackageJsonMain = "packageJson___main",
    PackageJsonName = "packageJson___name",
    PackageJsonPeerDependencies = "packageJson___peerDependencies",
    PackageJsonPeerDependenciesName = "packageJson___peerDependencies___name",
    PackageJsonPeerDependenciesVersion = "packageJson___peerDependencies___version",
    PackageJsonVersion = "packageJson___version",
    ParentChildren = "parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenId = "parent___children___id",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentId = "parent___id",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentId = "parent___parent___id",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentParentId = "parent___parent___parent___id",
    PluginFilepath = "pluginFilepath",
    PluginOptionsAssets = "pluginOptions____assets__",
    PluginOptionsComponents = "pluginOptions____components__",
    PluginOptionsContentful = "pluginOptions____contentful__",
    PluginOptionsStyles = "pluginOptions____styles__",
    PluginOptionsAccessToken = "pluginOptions___accessToken",
    PluginOptionsAllExtensions = "pluginOptions___allExtensions",
    PluginOptionsAssetDownloadWorkers = "pluginOptions___assetDownloadWorkers",
    PluginOptionsBase64Width = "pluginOptions___base64Width",
    PluginOptionsDefaultQuality = "pluginOptions___defaultQuality",
    PluginOptionsDefaultsFormats = "pluginOptions___defaults___formats",
    PluginOptionsDefaultsPlaceholder = "pluginOptions___defaults___placeholder",
    PluginOptionsDefaultsQuality = "pluginOptions___defaults___quality",
    PluginOptionsDest = "pluginOptions___dest",
    PluginOptionsDisplayName = "pluginOptions___displayName",
    PluginOptionsDownloadLocal = "pluginOptions___downloadLocal",
    PluginOptionsEnvironment = "pluginOptions___environment",
    PluginOptionsFailOnError = "pluginOptions___failOnError",
    PluginOptionsFileName = "pluginOptions___fileName",
    PluginOptionsForceFullSync = "pluginOptions___forceFullSync",
    PluginOptionsHost = "pluginOptions___host",
    PluginOptionsIsTsx = "pluginOptions___isTSX",
    PluginOptionsJsxPragma = "pluginOptions___jsxPragma",
    PluginOptionsMinify = "pluginOptions___minify",
    PluginOptionsName = "pluginOptions___name",
    PluginOptionsNamespace = "pluginOptions___namespace",
    PluginOptionsPageLimit = "pluginOptions___pageLimit",
    PluginOptionsPath = "pluginOptions___path",
    PluginOptionsPathCheck = "pluginOptions___pathCheck",
    PluginOptionsPure = "pluginOptions___pure",
    PluginOptionsSpaceId = "pluginOptions___spaceId",
    PluginOptionsStripMetadata = "pluginOptions___stripMetadata",
    PluginOptionsTranspileTemplateLiterals = "pluginOptions___transpileTemplateLiterals",
    PluginOptionsUseNameForId = "pluginOptions___useNameForId",
    Resolve = "resolve",
    SsrApIs = "ssrAPIs",
    Version = "version",
}

export type SitePluginFilterInput = {
    browserAPIs?: InputMaybe<StringQueryOperatorInput>;
    children?: InputMaybe<NodeFilterListInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
    nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
    packageJson?: InputMaybe<SitePluginPackageJsonFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
    pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
    pluginOptions?: InputMaybe<SitePluginPluginOptionsFilterInput>;
    resolve?: InputMaybe<StringQueryOperatorInput>;
    ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
    version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
    __typename?: "SitePluginGroupConnection";
    edges: Array<SitePluginEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type SitePluginPackageJson = {
    __typename?: "SitePluginPackageJson";
    dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
    description?: Maybe<Scalars["String"]>;
    devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
    keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
    license?: Maybe<Scalars["String"]>;
    main?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    peerDependencies?: Maybe<
        Array<Maybe<SitePluginPackageJsonPeerDependencies>>
    >;
    version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependencies = {
    __typename?: "SitePluginPackageJsonDependencies";
    name?: Maybe<Scalars["String"]>;
    version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
    name?: InputMaybe<StringQueryOperatorInput>;
    version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
    elemMatch?: InputMaybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
    __typename?: "SitePluginPackageJsonDevDependencies";
    name?: Maybe<Scalars["String"]>;
    version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
    name?: InputMaybe<StringQueryOperatorInput>;
    version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
    elemMatch?: InputMaybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
    dependencies?: InputMaybe<SitePluginPackageJsonDependenciesFilterListInput>;
    description?: InputMaybe<StringQueryOperatorInput>;
    devDependencies?: InputMaybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
    keywords?: InputMaybe<StringQueryOperatorInput>;
    license?: InputMaybe<StringQueryOperatorInput>;
    main?: InputMaybe<StringQueryOperatorInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
    peerDependencies?: InputMaybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
    version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
    __typename?: "SitePluginPackageJsonPeerDependencies";
    name?: Maybe<Scalars["String"]>;
    version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
    name?: InputMaybe<StringQueryOperatorInput>;
    version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
    elemMatch?: InputMaybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
    __typename?: "SitePluginPluginOptions";
    _assets__?: Maybe<Array<Maybe<Scalars["String"]>>>;
    _components__?: Maybe<Array<Maybe<Scalars["String"]>>>;
    _contentful__?: Maybe<Array<Maybe<Scalars["String"]>>>;
    _styles__?: Maybe<Array<Maybe<Scalars["String"]>>>;
    accessToken?: Maybe<Scalars["String"]>;
    allExtensions?: Maybe<Scalars["Boolean"]>;
    assetDownloadWorkers?: Maybe<Scalars["Int"]>;
    base64Width?: Maybe<Scalars["Int"]>;
    defaultQuality?: Maybe<Scalars["Int"]>;
    defaults?: Maybe<SitePluginPluginOptionsDefaults>;
    dest?: Maybe<Scalars["String"]>;
    displayName?: Maybe<Scalars["Boolean"]>;
    downloadLocal?: Maybe<Scalars["Boolean"]>;
    environment?: Maybe<Scalars["String"]>;
    failOnError?: Maybe<Scalars["Boolean"]>;
    fileName?: Maybe<Scalars["Boolean"]>;
    forceFullSync?: Maybe<Scalars["Boolean"]>;
    host?: Maybe<Scalars["String"]>;
    isTSX?: Maybe<Scalars["Boolean"]>;
    jsxPragma?: Maybe<Scalars["String"]>;
    minify?: Maybe<Scalars["Boolean"]>;
    name?: Maybe<Scalars["String"]>;
    namespace?: Maybe<Scalars["String"]>;
    pageLimit?: Maybe<Scalars["Int"]>;
    path?: Maybe<Scalars["String"]>;
    pathCheck?: Maybe<Scalars["Boolean"]>;
    pure?: Maybe<Scalars["Boolean"]>;
    spaceId?: Maybe<Scalars["String"]>;
    stripMetadata?: Maybe<Scalars["Boolean"]>;
    transpileTemplateLiterals?: Maybe<Scalars["Boolean"]>;
    useNameForId?: Maybe<Scalars["Boolean"]>;
};

export type SitePluginPluginOptionsDefaults = {
    __typename?: "SitePluginPluginOptionsDefaults";
    formats?: Maybe<Array<Maybe<Scalars["String"]>>>;
    placeholder?: Maybe<Scalars["String"]>;
    quality?: Maybe<Scalars["Int"]>;
};

export type SitePluginPluginOptionsDefaultsFilterInput = {
    formats?: InputMaybe<StringQueryOperatorInput>;
    placeholder?: InputMaybe<StringQueryOperatorInput>;
    quality?: InputMaybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
    _assets__?: InputMaybe<StringQueryOperatorInput>;
    _components__?: InputMaybe<StringQueryOperatorInput>;
    _contentful__?: InputMaybe<StringQueryOperatorInput>;
    _styles__?: InputMaybe<StringQueryOperatorInput>;
    accessToken?: InputMaybe<StringQueryOperatorInput>;
    allExtensions?: InputMaybe<BooleanQueryOperatorInput>;
    assetDownloadWorkers?: InputMaybe<IntQueryOperatorInput>;
    base64Width?: InputMaybe<IntQueryOperatorInput>;
    defaultQuality?: InputMaybe<IntQueryOperatorInput>;
    defaults?: InputMaybe<SitePluginPluginOptionsDefaultsFilterInput>;
    dest?: InputMaybe<StringQueryOperatorInput>;
    displayName?: InputMaybe<BooleanQueryOperatorInput>;
    downloadLocal?: InputMaybe<BooleanQueryOperatorInput>;
    environment?: InputMaybe<StringQueryOperatorInput>;
    failOnError?: InputMaybe<BooleanQueryOperatorInput>;
    fileName?: InputMaybe<BooleanQueryOperatorInput>;
    forceFullSync?: InputMaybe<BooleanQueryOperatorInput>;
    host?: InputMaybe<StringQueryOperatorInput>;
    isTSX?: InputMaybe<BooleanQueryOperatorInput>;
    jsxPragma?: InputMaybe<StringQueryOperatorInput>;
    minify?: InputMaybe<BooleanQueryOperatorInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
    namespace?: InputMaybe<StringQueryOperatorInput>;
    pageLimit?: InputMaybe<IntQueryOperatorInput>;
    path?: InputMaybe<StringQueryOperatorInput>;
    pathCheck?: InputMaybe<BooleanQueryOperatorInput>;
    pure?: InputMaybe<BooleanQueryOperatorInput>;
    spaceId?: InputMaybe<StringQueryOperatorInput>;
    stripMetadata?: InputMaybe<BooleanQueryOperatorInput>;
    transpileTemplateLiterals?: InputMaybe<BooleanQueryOperatorInput>;
    useNameForId?: InputMaybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
    fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
    __typename?: "SiteSiteMetadata";
    description?: Maybe<Scalars["String"]>;
    image?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    titleTemplate?: Maybe<Scalars["String"]>;
    twitterUsername?: Maybe<Scalars["String"]>;
    url?: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
    description?: InputMaybe<StringQueryOperatorInput>;
    image?: InputMaybe<StringQueryOperatorInput>;
    title?: InputMaybe<StringQueryOperatorInput>;
    titleTemplate?: InputMaybe<StringQueryOperatorInput>;
    twitterUsername?: InputMaybe<StringQueryOperatorInput>;
    url?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
    fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
    Asc = "ASC",
    Desc = "DESC",
}

export type StringQueryOperatorInput = {
    eq?: InputMaybe<Scalars["String"]>;
    glob?: InputMaybe<Scalars["String"]>;
    in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    ne?: InputMaybe<Scalars["String"]>;
    nin?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    regex?: InputMaybe<Scalars["String"]>;
};

export type TransformOptions = {
    cropFocus?: InputMaybe<ImageCropFocus>;
    duotone?: InputMaybe<DuotoneGradient>;
    fit?: InputMaybe<ImageFit>;
    grayscale?: InputMaybe<Scalars["Boolean"]>;
    rotate?: InputMaybe<Scalars["Int"]>;
    trim?: InputMaybe<Scalars["Float"]>;
};

export type WebPOptions = {
    quality?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulProjectsConclusionTextNode = Node & {
    __typename?: "contentfulProjectsConclusionTextNode";
    children: Array<Node>;
    conclusion?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    internal: Internal;
    parent?: Maybe<Node>;
    sys?: Maybe<ContentfulProjectsConclusionTextNodeSys>;
};

export type ContentfulProjectsConclusionTextNodeConnection = {
    __typename?: "contentfulProjectsConclusionTextNodeConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<ContentfulProjectsConclusionTextNodeEdge>;
    group: Array<ContentfulProjectsConclusionTextNodeGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<ContentfulProjectsConclusionTextNode>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type ContentfulProjectsConclusionTextNodeConnectionDistinctArgs = {
    field: ContentfulProjectsConclusionTextNodeFieldsEnum;
};

export type ContentfulProjectsConclusionTextNodeConnectionGroupArgs = {
    field: ContentfulProjectsConclusionTextNodeFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulProjectsConclusionTextNodeConnectionMaxArgs = {
    field: ContentfulProjectsConclusionTextNodeFieldsEnum;
};

export type ContentfulProjectsConclusionTextNodeConnectionMinArgs = {
    field: ContentfulProjectsConclusionTextNodeFieldsEnum;
};

export type ContentfulProjectsConclusionTextNodeConnectionSumArgs = {
    field: ContentfulProjectsConclusionTextNodeFieldsEnum;
};

export type ContentfulProjectsConclusionTextNodeEdge = {
    __typename?: "contentfulProjectsConclusionTextNodeEdge";
    next?: Maybe<ContentfulProjectsConclusionTextNode>;
    node: ContentfulProjectsConclusionTextNode;
    previous?: Maybe<ContentfulProjectsConclusionTextNode>;
};

export enum ContentfulProjectsConclusionTextNodeFieldsEnum {
    Children = "children",
    ChildrenChildren = "children___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenId = "children___id",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentParentId = "children___parent___parent___id",
    Conclusion = "conclusion",
    Id = "id",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    ParentChildren = "parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenId = "parent___children___id",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentId = "parent___id",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentId = "parent___parent___id",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentParentId = "parent___parent___parent___id",
    SysType = "sys___type",
}

export type ContentfulProjectsConclusionTextNodeFilterInput = {
    children?: InputMaybe<NodeFilterListInput>;
    conclusion?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
    sys?: InputMaybe<ContentfulProjectsConclusionTextNodeSysFilterInput>;
};

export type ContentfulProjectsConclusionTextNodeFilterListInput = {
    elemMatch?: InputMaybe<ContentfulProjectsConclusionTextNodeFilterInput>;
};

export type ContentfulProjectsConclusionTextNodeGroupConnection = {
    __typename?: "contentfulProjectsConclusionTextNodeGroupConnection";
    edges: Array<ContentfulProjectsConclusionTextNodeEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<ContentfulProjectsConclusionTextNode>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type ContentfulProjectsConclusionTextNodeSortInput = {
    fields?: InputMaybe<
        Array<InputMaybe<ContentfulProjectsConclusionTextNodeFieldsEnum>>
    >;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulProjectsConclusionTextNodeSys = {
    __typename?: "contentfulProjectsConclusionTextNodeSys";
    type?: Maybe<Scalars["String"]>;
};

export type ContentfulProjectsConclusionTextNodeSysFilterInput = {
    type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProjectsContentJsonNode = Node & {
    __typename?: "contentfulProjectsContentJsonNode";
    app_link?: Maybe<Scalars["String"]>;
    children: Array<Node>;
    github_link?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    internal: Internal;
    parent?: Maybe<Node>;
    stacks?: Maybe<Array<Maybe<Scalars["String"]>>>;
    sys?: Maybe<ContentfulProjectsContentJsonNodeSys>;
    tags?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type ContentfulProjectsContentJsonNodeConnection = {
    __typename?: "contentfulProjectsContentJsonNodeConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<ContentfulProjectsContentJsonNodeEdge>;
    group: Array<ContentfulProjectsContentJsonNodeGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<ContentfulProjectsContentJsonNode>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type ContentfulProjectsContentJsonNodeConnectionDistinctArgs = {
    field: ContentfulProjectsContentJsonNodeFieldsEnum;
};

export type ContentfulProjectsContentJsonNodeConnectionGroupArgs = {
    field: ContentfulProjectsContentJsonNodeFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulProjectsContentJsonNodeConnectionMaxArgs = {
    field: ContentfulProjectsContentJsonNodeFieldsEnum;
};

export type ContentfulProjectsContentJsonNodeConnectionMinArgs = {
    field: ContentfulProjectsContentJsonNodeFieldsEnum;
};

export type ContentfulProjectsContentJsonNodeConnectionSumArgs = {
    field: ContentfulProjectsContentJsonNodeFieldsEnum;
};

export type ContentfulProjectsContentJsonNodeEdge = {
    __typename?: "contentfulProjectsContentJsonNodeEdge";
    next?: Maybe<ContentfulProjectsContentJsonNode>;
    node: ContentfulProjectsContentJsonNode;
    previous?: Maybe<ContentfulProjectsContentJsonNode>;
};

export enum ContentfulProjectsContentJsonNodeFieldsEnum {
    AppLink = "app_link",
    Children = "children",
    ChildrenChildren = "children___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenId = "children___id",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentParentId = "children___parent___parent___id",
    GithubLink = "github_link",
    Id = "id",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    ParentChildren = "parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenId = "parent___children___id",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentId = "parent___id",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentId = "parent___parent___id",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentParentId = "parent___parent___parent___id",
    Stacks = "stacks",
    SysType = "sys___type",
    Tags = "tags",
}

export type ContentfulProjectsContentJsonNodeFilterInput = {
    app_link?: InputMaybe<StringQueryOperatorInput>;
    children?: InputMaybe<NodeFilterListInput>;
    github_link?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
    stacks?: InputMaybe<StringQueryOperatorInput>;
    sys?: InputMaybe<ContentfulProjectsContentJsonNodeSysFilterInput>;
    tags?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProjectsContentJsonNodeFilterListInput = {
    elemMatch?: InputMaybe<ContentfulProjectsContentJsonNodeFilterInput>;
};

export type ContentfulProjectsContentJsonNodeGroupConnection = {
    __typename?: "contentfulProjectsContentJsonNodeGroupConnection";
    edges: Array<ContentfulProjectsContentJsonNodeEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<ContentfulProjectsContentJsonNode>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type ContentfulProjectsContentJsonNodeSortInput = {
    fields?: InputMaybe<
        Array<InputMaybe<ContentfulProjectsContentJsonNodeFieldsEnum>>
    >;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulProjectsContentJsonNodeSys = {
    __typename?: "contentfulProjectsContentJsonNodeSys";
    type?: Maybe<Scalars["String"]>;
};

export type ContentfulProjectsContentJsonNodeSysFilterInput = {
    type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProjectsDescriptionTextNode = Node & {
    __typename?: "contentfulProjectsDescriptionTextNode";
    children: Array<Node>;
    description?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    internal: Internal;
    parent?: Maybe<Node>;
    sys?: Maybe<ContentfulProjectsDescriptionTextNodeSys>;
};

export type ContentfulProjectsDescriptionTextNodeConnection = {
    __typename?: "contentfulProjectsDescriptionTextNodeConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<ContentfulProjectsDescriptionTextNodeEdge>;
    group: Array<ContentfulProjectsDescriptionTextNodeGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<ContentfulProjectsDescriptionTextNode>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type ContentfulProjectsDescriptionTextNodeConnectionDistinctArgs = {
    field: ContentfulProjectsDescriptionTextNodeFieldsEnum;
};

export type ContentfulProjectsDescriptionTextNodeConnectionGroupArgs = {
    field: ContentfulProjectsDescriptionTextNodeFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulProjectsDescriptionTextNodeConnectionMaxArgs = {
    field: ContentfulProjectsDescriptionTextNodeFieldsEnum;
};

export type ContentfulProjectsDescriptionTextNodeConnectionMinArgs = {
    field: ContentfulProjectsDescriptionTextNodeFieldsEnum;
};

export type ContentfulProjectsDescriptionTextNodeConnectionSumArgs = {
    field: ContentfulProjectsDescriptionTextNodeFieldsEnum;
};

export type ContentfulProjectsDescriptionTextNodeEdge = {
    __typename?: "contentfulProjectsDescriptionTextNodeEdge";
    next?: Maybe<ContentfulProjectsDescriptionTextNode>;
    node: ContentfulProjectsDescriptionTextNode;
    previous?: Maybe<ContentfulProjectsDescriptionTextNode>;
};

export enum ContentfulProjectsDescriptionTextNodeFieldsEnum {
    Children = "children",
    ChildrenChildren = "children___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenId = "children___id",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentParentId = "children___parent___parent___id",
    Description = "description",
    Id = "id",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    ParentChildren = "parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenId = "parent___children___id",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentId = "parent___id",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentId = "parent___parent___id",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentParentId = "parent___parent___parent___id",
    SysType = "sys___type",
}

export type ContentfulProjectsDescriptionTextNodeFilterInput = {
    children?: InputMaybe<NodeFilterListInput>;
    description?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
    sys?: InputMaybe<ContentfulProjectsDescriptionTextNodeSysFilterInput>;
};

export type ContentfulProjectsDescriptionTextNodeFilterListInput = {
    elemMatch?: InputMaybe<ContentfulProjectsDescriptionTextNodeFilterInput>;
};

export type ContentfulProjectsDescriptionTextNodeGroupConnection = {
    __typename?: "contentfulProjectsDescriptionTextNodeGroupConnection";
    edges: Array<ContentfulProjectsDescriptionTextNodeEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<ContentfulProjectsDescriptionTextNode>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type ContentfulProjectsDescriptionTextNodeSortInput = {
    fields?: InputMaybe<
        Array<InputMaybe<ContentfulProjectsDescriptionTextNodeFieldsEnum>>
    >;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulProjectsDescriptionTextNodeSys = {
    __typename?: "contentfulProjectsDescriptionTextNodeSys";
    type?: Maybe<Scalars["String"]>;
};

export type ContentfulProjectsDescriptionTextNodeSysFilterInput = {
    type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProjectsLessonTextNode = Node & {
    __typename?: "contentfulProjectsLessonTextNode";
    children: Array<Node>;
    id: Scalars["ID"];
    internal: Internal;
    lesson?: Maybe<Scalars["String"]>;
    parent?: Maybe<Node>;
    sys?: Maybe<ContentfulProjectsLessonTextNodeSys>;
};

export type ContentfulProjectsLessonTextNodeConnection = {
    __typename?: "contentfulProjectsLessonTextNodeConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<ContentfulProjectsLessonTextNodeEdge>;
    group: Array<ContentfulProjectsLessonTextNodeGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<ContentfulProjectsLessonTextNode>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type ContentfulProjectsLessonTextNodeConnectionDistinctArgs = {
    field: ContentfulProjectsLessonTextNodeFieldsEnum;
};

export type ContentfulProjectsLessonTextNodeConnectionGroupArgs = {
    field: ContentfulProjectsLessonTextNodeFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulProjectsLessonTextNodeConnectionMaxArgs = {
    field: ContentfulProjectsLessonTextNodeFieldsEnum;
};

export type ContentfulProjectsLessonTextNodeConnectionMinArgs = {
    field: ContentfulProjectsLessonTextNodeFieldsEnum;
};

export type ContentfulProjectsLessonTextNodeConnectionSumArgs = {
    field: ContentfulProjectsLessonTextNodeFieldsEnum;
};

export type ContentfulProjectsLessonTextNodeEdge = {
    __typename?: "contentfulProjectsLessonTextNodeEdge";
    next?: Maybe<ContentfulProjectsLessonTextNode>;
    node: ContentfulProjectsLessonTextNode;
    previous?: Maybe<ContentfulProjectsLessonTextNode>;
};

export enum ContentfulProjectsLessonTextNodeFieldsEnum {
    Children = "children",
    ChildrenChildren = "children___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenId = "children___id",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentParentId = "children___parent___parent___id",
    Id = "id",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    Lesson = "lesson",
    ParentChildren = "parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenId = "parent___children___id",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentId = "parent___id",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentId = "parent___parent___id",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentParentId = "parent___parent___parent___id",
    SysType = "sys___type",
}

export type ContentfulProjectsLessonTextNodeFilterInput = {
    children?: InputMaybe<NodeFilterListInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    lesson?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    sys?: InputMaybe<ContentfulProjectsLessonTextNodeSysFilterInput>;
};

export type ContentfulProjectsLessonTextNodeFilterListInput = {
    elemMatch?: InputMaybe<ContentfulProjectsLessonTextNodeFilterInput>;
};

export type ContentfulProjectsLessonTextNodeGroupConnection = {
    __typename?: "contentfulProjectsLessonTextNodeGroupConnection";
    edges: Array<ContentfulProjectsLessonTextNodeEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<ContentfulProjectsLessonTextNode>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type ContentfulProjectsLessonTextNodeSortInput = {
    fields?: InputMaybe<
        Array<InputMaybe<ContentfulProjectsLessonTextNodeFieldsEnum>>
    >;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulProjectsLessonTextNodeSys = {
    __typename?: "contentfulProjectsLessonTextNodeSys";
    type?: Maybe<Scalars["String"]>;
};

export type ContentfulProjectsLessonTextNodeSysFilterInput = {
    type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProjectsResumeTextNode = Node & {
    __typename?: "contentfulProjectsResumeTextNode";
    children: Array<Node>;
    id: Scalars["ID"];
    internal: Internal;
    parent?: Maybe<Node>;
    resume?: Maybe<Scalars["String"]>;
    sys?: Maybe<ContentfulProjectsResumeTextNodeSys>;
};

export type ContentfulProjectsResumeTextNodeConnection = {
    __typename?: "contentfulProjectsResumeTextNodeConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<ContentfulProjectsResumeTextNodeEdge>;
    group: Array<ContentfulProjectsResumeTextNodeGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<ContentfulProjectsResumeTextNode>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type ContentfulProjectsResumeTextNodeConnectionDistinctArgs = {
    field: ContentfulProjectsResumeTextNodeFieldsEnum;
};

export type ContentfulProjectsResumeTextNodeConnectionGroupArgs = {
    field: ContentfulProjectsResumeTextNodeFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulProjectsResumeTextNodeConnectionMaxArgs = {
    field: ContentfulProjectsResumeTextNodeFieldsEnum;
};

export type ContentfulProjectsResumeTextNodeConnectionMinArgs = {
    field: ContentfulProjectsResumeTextNodeFieldsEnum;
};

export type ContentfulProjectsResumeTextNodeConnectionSumArgs = {
    field: ContentfulProjectsResumeTextNodeFieldsEnum;
};

export type ContentfulProjectsResumeTextNodeEdge = {
    __typename?: "contentfulProjectsResumeTextNodeEdge";
    next?: Maybe<ContentfulProjectsResumeTextNode>;
    node: ContentfulProjectsResumeTextNode;
    previous?: Maybe<ContentfulProjectsResumeTextNode>;
};

export enum ContentfulProjectsResumeTextNodeFieldsEnum {
    Children = "children",
    ChildrenChildren = "children___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenId = "children___id",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentParentId = "children___parent___parent___id",
    Id = "id",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    ParentChildren = "parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenId = "parent___children___id",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentId = "parent___id",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentId = "parent___parent___id",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentParentId = "parent___parent___parent___id",
    Resume = "resume",
    SysType = "sys___type",
}

export type ContentfulProjectsResumeTextNodeFilterInput = {
    children?: InputMaybe<NodeFilterListInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
    resume?: InputMaybe<StringQueryOperatorInput>;
    sys?: InputMaybe<ContentfulProjectsResumeTextNodeSysFilterInput>;
};

export type ContentfulProjectsResumeTextNodeFilterListInput = {
    elemMatch?: InputMaybe<ContentfulProjectsResumeTextNodeFilterInput>;
};

export type ContentfulProjectsResumeTextNodeGroupConnection = {
    __typename?: "contentfulProjectsResumeTextNodeGroupConnection";
    edges: Array<ContentfulProjectsResumeTextNodeEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<ContentfulProjectsResumeTextNode>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type ContentfulProjectsResumeTextNodeSortInput = {
    fields?: InputMaybe<
        Array<InputMaybe<ContentfulProjectsResumeTextNodeFieldsEnum>>
    >;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulProjectsResumeTextNodeSys = {
    __typename?: "contentfulProjectsResumeTextNodeSys";
    type?: Maybe<Scalars["String"]>;
};

export type ContentfulProjectsResumeTextNodeSysFilterInput = {
    type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProjectsUsedTextNode = Node & {
    __typename?: "contentfulProjectsUsedTextNode";
    children: Array<Node>;
    id: Scalars["ID"];
    internal: Internal;
    parent?: Maybe<Node>;
    sys?: Maybe<ContentfulProjectsUsedTextNodeSys>;
    used?: Maybe<Scalars["String"]>;
};

export type ContentfulProjectsUsedTextNodeConnection = {
    __typename?: "contentfulProjectsUsedTextNodeConnection";
    distinct: Array<Scalars["String"]>;
    edges: Array<ContentfulProjectsUsedTextNodeEdge>;
    group: Array<ContentfulProjectsUsedTextNodeGroupConnection>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    nodes: Array<ContentfulProjectsUsedTextNode>;
    pageInfo: PageInfo;
    sum?: Maybe<Scalars["Float"]>;
    totalCount: Scalars["Int"];
};

export type ContentfulProjectsUsedTextNodeConnectionDistinctArgs = {
    field: ContentfulProjectsUsedTextNodeFieldsEnum;
};

export type ContentfulProjectsUsedTextNodeConnectionGroupArgs = {
    field: ContentfulProjectsUsedTextNodeFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulProjectsUsedTextNodeConnectionMaxArgs = {
    field: ContentfulProjectsUsedTextNodeFieldsEnum;
};

export type ContentfulProjectsUsedTextNodeConnectionMinArgs = {
    field: ContentfulProjectsUsedTextNodeFieldsEnum;
};

export type ContentfulProjectsUsedTextNodeConnectionSumArgs = {
    field: ContentfulProjectsUsedTextNodeFieldsEnum;
};

export type ContentfulProjectsUsedTextNodeEdge = {
    __typename?: "contentfulProjectsUsedTextNodeEdge";
    next?: Maybe<ContentfulProjectsUsedTextNode>;
    node: ContentfulProjectsUsedTextNode;
    previous?: Maybe<ContentfulProjectsUsedTextNode>;
};

export enum ContentfulProjectsUsedTextNodeFieldsEnum {
    Children = "children",
    ChildrenChildren = "children___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenId = "children___id",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentParentId = "children___parent___parent___id",
    Id = "id",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    ParentChildren = "parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenId = "parent___children___id",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentId = "parent___id",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentId = "parent___parent___id",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentParentId = "parent___parent___parent___id",
    SysType = "sys___type",
    Used = "used",
}

export type ContentfulProjectsUsedTextNodeFilterInput = {
    children?: InputMaybe<NodeFilterListInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    internal?: InputMaybe<InternalFilterInput>;
    parent?: InputMaybe<NodeFilterInput>;
    sys?: InputMaybe<ContentfulProjectsUsedTextNodeSysFilterInput>;
    used?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProjectsUsedTextNodeFilterListInput = {
    elemMatch?: InputMaybe<ContentfulProjectsUsedTextNodeFilterInput>;
};

export type ContentfulProjectsUsedTextNodeGroupConnection = {
    __typename?: "contentfulProjectsUsedTextNodeGroupConnection";
    edges: Array<ContentfulProjectsUsedTextNodeEdge>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
    nodes: Array<ContentfulProjectsUsedTextNode>;
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};

export type ContentfulProjectsUsedTextNodeSortInput = {
    fields?: InputMaybe<
        Array<InputMaybe<ContentfulProjectsUsedTextNodeFieldsEnum>>
    >;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulProjectsUsedTextNodeSys = {
    __typename?: "contentfulProjectsUsedTextNodeSys";
    type?: Maybe<Scalars["String"]>;
};

export type ContentfulProjectsUsedTextNodeSysFilterInput = {
    type?: InputMaybe<StringQueryOperatorInput>;
};
