//  Base URL.
// const base_url = "https://foretrust-leads-record-api.herokuapp.com/api/v1";
const base_url = "http://localhost:5000/api/v1";

//  Auth routes.
export const user_signup_url = `${ base_url }/users/signup`;
export const user_login_url = `${ base_url }/users/login`;

//  Users routes.
export const get_all_users_url = `${ base_url }/users/all_users`;
export const get_all_audience_url = `${ base_url }/users/all_audience`;
export const get_all_punters_url = `${ base_url }/users/all_punters`;
export const get_single_user_url = `${ base_url }/users/single_user`;
export const update_single_user_url = `${ base_url }/users/update_user`;
export const delete_single_user_url = `${ base_url }/users/delete_user`;
export const delete_single_punter_url = `${ base_url }/users/delete_punter`;
export const delete_single_audience_url = `${ base_url }/users/delete_audience`;

//  Users routes.
export const create_podcast_url = `${ base_url }/podcasts/create_podcast`;
export const upload_podcast_image_url = `${ base_url }/podcasts/upload_podcast_image`;
export const upload_podcast_video_url = `${ base_url }/podcasts/upload_podcast_video`;
export const get_all_podcasts_url = `${ base_url }/podcasts/get_all_podcasts`;
export const get_single_podcast_url = `${ base_url }/podcasts/get_single_podcast`;
export const update_single_podcast_url = `${ base_url }/podcasts/update_single_podcast`;
export const delete_single_podcast_url = `${ base_url }/podcasts/delete_single_podcast`;
