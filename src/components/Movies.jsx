import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions, IconButton, Box, Chip, Stack } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function ListOfMovies({ movies }) {
    let urlPosterMovie = "https://image.tmdb.org/t/p/w500/";
    const placeholder = "https://via.placeholder.com/500x750?text=No+Image";

    return (
        <Grid container spacing={3}>
            {
                movies?.map(movie => (
                    <Grid key={movie.id} item xs={12} sm={6} md={4} >
                        <Card
                            sx={{
                                maxWidth: 345,
                                transition: 'transform 200ms ease, box-shadow 200ms ease',
                                '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 }
                            }}
                        >
                            <CardActionArea>
                                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                                    <CardMedia
                                        component="img"
                                        image={movie.poster ? urlPosterMovie + movie.poster : placeholder}
                                        alt={movie.title}
                                        sx={{
                                            // height: 0,
                                            // paddingTop: '150%', // controla aspect ratio (2:3)
                                            objectFit: 'cover',
                                            transition: 'transform 300ms ease',
                                            '&:hover': { transform: 'scale(1.03)' }
                                        }}
                                    />
                                    {/* overlay gradient for readable text */}
                                    <Box sx={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        p: 1,
                                        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
                                        color: 'common.white'
                                    }}>
                                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                                            <Typography variant="subtitle1" noWrap sx={{ fontWeight: 700 }}>
                                                {movie.title}
                                            </Typography>
                                            {movie.year && <Chip label={movie.year?.slice(0, 4)} size="small" color="primary" />}
                                        </Stack>
                                    </Box>
                                </Box>

                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" noWrap>
                                        {/* puedes mostrar sinopsis corta aquí si la añades al hook */}
                                        {movie.overview ?? ''}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions sx={{ justifyContent: 'space-between' }}>
                                <IconButton aria-label="favorito" size="small">
                                    <FavoriteBorderIcon fontSize="small" />
                                </IconButton>
                                <IconButton aria-label="info" size="small">
                                    <InfoOutlinedIcon fontSize="small" />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    )
}

function NoMoviesResults() {
    return (
        <p>No se encontraron resultados</p>
    )
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0;

    return (
        hasMovies
            ? <ListOfMovies movies={movies}></ListOfMovies>
            : <NoMoviesResults></NoMoviesResults>
    )
}