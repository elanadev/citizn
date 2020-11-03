import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const QuestionCard = ({ question }) => (
  <>
    <Text>{question.heading}</Text>
    <Text>{question.subheading}</Text>
    <Card>
      <Card.Content>
        <Title>{question.question}</Title>
        <Paragraph>{question.responses}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Back</Button>
        <Button>Next</Button>
      </Card.Actions>
    </Card>
  </>
)

export default QuestionCard;
