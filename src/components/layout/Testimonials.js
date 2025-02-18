import React from 'react';
import { Paper, Typography, Box, Avatar, Rating } from '@mui/material';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "I was drowning in debt until I found this service. They helped me reduce my payments by 45%!",
      location: "Texas"
    },
    {
      name: "Michael Smith",
      rating: 5,
      text: "Professional team that really cares. Now I'm on track to be debt-free in 24 months.",
      location: "Florida"
    },
    {
      name: "Lisa Anderson",
      rating: 5,
      text: "The best decision I made was calling them. They saved me over $15,000 on my credit card debt!",
      location: "California"
    }
  ];

  return (
    <Paper elevation={0} sx={{ p: 3, mt: 4, bgcolor: 'transparent' }}>
      <Typography variant="h6" gutterBottom align="center" sx={{ mb: 4 }}>
        Success Stories
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {testimonials.map((testimonial, index) => (
          <Paper key={index} sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                {testimonial.name[0]}
              </Avatar>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.location}
                </Typography>
              </Box>
            </Box>
            <Rating value={testimonial.rating} readOnly sx={{ mb: 1 }} />
            <Typography variant="body2" color="text.secondary">
              "{testimonial.text}"
            </Typography>
          </Paper>
        ))}
      </Box>
    </Paper>
  );
};

export default Testimonials;