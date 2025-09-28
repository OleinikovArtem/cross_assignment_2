import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type RatingStarsProps = {
  rating: number;
  size?: 'small' | 'medium' | 'large';
};

export const RatingStars: React.FC<RatingStarsProps> = React.memo(({ 
  rating, 
  size = 'medium' 
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const getStarSize = () => {
    switch (size) {
      case 'small': return 12;
      case 'large': return 20;
      default: return 16;
    }
  };

  const starSize = getStarSize();

  return (
    <View style={styles.container}>
      {/* Повні зірки */}
      {Array.from({ length: fullStars }, (_, i) => (
        <Text key={`full-${i}`} style={[styles.star, { fontSize: starSize }]}>
          ⭐
        </Text>
      ))}
      
      {/* Половинна зірка */}
      {hasHalfStar && (
        <Text style={[styles.star, { fontSize: starSize }]}>
          ✨
        </Text>
      )}
      
      {/* Порожні зірки */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <Text key={`empty-${i}`} style={[styles.star, styles.empty, { fontSize: starSize }]}>
          ☆
        </Text>
      ))}
      
      <Text style={[styles.ratingText, { fontSize: starSize - 2 }]}>
        {rating.toFixed(1)}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  star: {
    marginRight: 2,
  },
  empty: {
    opacity: 0.3,
  },
  ratingText: {
    marginLeft: 4,
    color: '#666',
    fontWeight: '500',
  },
});
