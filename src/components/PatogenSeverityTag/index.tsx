
export const PatogenSeverityTag = ({ severity }: { severity: string }) => {
  const getColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'low':
        return 'green';
      case 'medium':
        return 'orange';
      case 'high':
        return 'red';
      default:
        return 'gray';
    }
  };

  const styles = {
    tag: {
      display: 'inline-block',
      padding: '4px 8px',
      borderRadius: '4px',
      backgroundColor: getColor(severity),
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'capitalize' as const,
    },
  };

  return <span style={styles.tag}>{severity}</span>;
}