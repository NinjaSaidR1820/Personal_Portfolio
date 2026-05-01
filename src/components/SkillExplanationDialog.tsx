
'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { explainSkill } from '@/ai/flows/ai-skill-explainer';
import { Loader2, Sparkles } from 'lucide-react';

interface SkillExplanationDialogProps {
  skillName: string | null;
  onClose: () => void;
}

export function SkillExplanationDialog({ skillName, onClose }: SkillExplanationDialogProps) {
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);

  React.useEffect(() => {
    if (skillName) {
      setLoading(true);
      explainSkill({ skillName })
        .then((res) => setExplanation(res.explanation))
        .finally(() => setLoading(false));
    } else {
      setExplanation(null);
    }
  }, [skillName]);

  return (
    <Dialog open={!!skillName} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-primary font-headline">
            <Sparkles className="w-5 h-5" />
            Exploring {skillName}
          </DialogTitle>
        </DialogHeader>
        <div className="py-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center space-y-4 py-8">
              <Loader2 className="h-8 w-8 animate-spin text-accent" />
              <p className="text-sm text-muted-foreground animate-pulse">Consulting AI experts...</p>
            </div>
          ) : (
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-foreground leading-relaxed font-body">
                {explanation || "Could not generate an explanation at this time."}
              </p>
            </div>
          )}
        </div>
        <DialogDescription className="text-xs italic">
          Insights powered by DevForge AI Skill Engine.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
